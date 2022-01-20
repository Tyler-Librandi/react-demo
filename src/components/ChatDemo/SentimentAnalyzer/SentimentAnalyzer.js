import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import padSequences from "./paddedSeq";
import styles from "./SentimentAnalyzer.module.css";

function SentimentAnalyzerComponent({ childToParent }) {
  const url = {
    model:
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json",
    metadata:
      "https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json",
  };

  const OOV_INDEX = 2;

  const [metadata, setMetadata] = useState();
  const [model, setModel] = useState();
  const [testText, setText] = useState("");
  const [testScore, setScore] = useState("");
  const [trimmedText, setTrim] = useState("");
  const [seqText, setSeq] = useState("");
  const [padText, setPad] = useState("");
  const [inputText, setInput] = useState("");

  async function loadModel(url) {
    try {
      const model = await tf.loadLayersModel(url.model);
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadMetadata(url) {
    try {
      const metadataJson = await fetch(url.metadata);
      const metadata = await metadataJson.json();
      setMetadata(metadata);
    } catch (err) {
      console.log(err);
    }
  }

  const getSentimentScore = (text) => {
    const inputText = text
      .trim()
      .toLowerCase()
      .replace(/(\.|\,|\!)/g, "")
      .split(" ");
    setTrim(inputText);
    const sequence = inputText.map((word) => {
      let wordIndex = metadata.word_index[word] + metadata.index_from;
      if (wordIndex > metadata.vocabulary_size) {
        wordIndex = OOV_INDEX;
      }
      return wordIndex;
    });
    setSeq(sequence);
    const paddedSequence = padSequences([sequence], metadata.max_len);
    setPad(paddedSequence);

    const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
    setInput(input);
    const predictOut = model.predict(input);
    const score = predictOut.dataSync()[0];
    predictOut.dispose();
    setScore(score);
    setText("");
    return score;
  };

  useEffect(() => {
    tf.ready().then(() => {
      loadModel(url);
      loadMetadata(url);
    });
  }, []);

  function sendData() {
    childToParent(getSentimentScore(testText), testText);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <input
          id="input"
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
          placeholder="Talk to Seb!"
          value={testText}
        />
        <br />
        <br />
        <button type="submit" className={styles.btn}>
          Send
        </button>
      </form>
    </>
  );
}

export default SentimentAnalyzerComponent;
