import { useState, useEffect } from "react";
import styles from "./ChatDemo.module.css";
import sebNeutral from "../../images/seb/seb-neutral.svg";
import sebHappy from "../../images/seb/seb-happy.svg";
import sebSad from "../../images/seb/seb-sad.svg";
import sebAngry from "../../images/seb/seb-angry.svg";
import sebConfused from "../../images/seb/seb-confused.svg";
import SentimentAnalyzerComponent from "./SentimentAnalyzer/SentimentAnalyzer";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import wrapperStyles from "../Wrapper.module.css";

function ChatDemoComponent() {
  const [sebStatus, setSebStatus] = useState("neutral");
  const [sentScore, setSentScore] = useState(0);
  const [textList, setTextList] = useState([]);
  const listRef = useRef(null);

  const childToParent = (data, userText) => {
    let newAnswer = "";
    const happyResponse = [
      "yay!",
      "ha ha ha!",
      "woohoo!",
      "hooray!",
      "i love that!",
      "thank you!",
      "i'm so happy!",
      "awesome!",
      "hehehe!",
      "yes!",
    ];
    const neutralResponse = [
      "interesting",
      "i see",
      "yes",
      "no",
      "alright",
      "okay",
      "sure",
      "why not",
      "got it",
      "mhm",
    ];
    const confusedResponse = [
      "huh?",
      "what?",
      "wait. what?",
      "i— i don't understand",
      "but...",
      "ummm",
      "yeah?",
      "well...",
      "i don't know",
      "not sure what you mean",
    ];
    const sadResponse = [
      "oh no",
      "*sniffle*",
      "but— but— but—",
      "how could you say that?",
      "why?",
      "im so sad",
      "you ruined my day",
      "that's horrible",
      "wahhh",
      "that's upsetting",
    ];
    const angryResponse = [
      "hey!",
      "grrrr!",
      "ahhhhh!",
      "rude!",
      "awful!",
      "you disgust me",
      "i'm so angry now!",
      "boo!",
      "noooo!",
      "so mad!",
    ];

    setSentScore(data);
    if (data > 0.9) {
      setSebStatus("happy");
      newAnswer =
        happyResponse[Math.floor(Math.random() * happyResponse.length)];
    } else if (data > 0.75) {
      setSebStatus("neutral");
      newAnswer =
        neutralResponse[Math.floor(Math.random() * neutralResponse.length)];
    } else if (data > 0.5) {
      setSebStatus("confused");
      newAnswer =
        confusedResponse[Math.floor(Math.random() * confusedResponse.length)];
    } else if (data > 0.25) {
      setSebStatus("sad");
      newAnswer = sadResponse[Math.floor(Math.random() * sadResponse.length)];
    } else {
      setSebStatus("angry");
      newAnswer =
        angryResponse[Math.floor(Math.random() * angryResponse.length)];
    }
    addUserItem(userText, newAnswer);
  };

  let addUserItem = (userText, newAnswer) => {
    if (userText != "") {
      setTextList([...textList, userText, newAnswer]);
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (listRef) {
      listRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div className={styles.chatDemo}>
      <div className="row">
        <div className={[styles.intro, "col-xl-8"].join(" ")}>
          <h1 className={styles.title}>Chat with Seb</h1>
          <p className={styles.subtitle}>
            Interact with Seb and watch his feelings change. (Don't get on his
            bad side, it's ugly...)
          </p>
          <div className={styles.seb}>
            {sebStatus == "neutral" ? (
              <img
                src={sebNeutral}
                alt="neutral emoji"
                className={styles.sebImg}
              />
            ) : sebStatus == "happy" ? (
              <img src={sebHappy} alt="happy emoji" className={styles.sebImg} />
            ) : sebStatus == "sad" ? (
              <img src={sebSad} alt="sad emoji" className={styles.sebImg} />
            ) : sebStatus == "angry" ? (
              <img src={sebAngry} alt="angry emoji" className={styles.sebImg} />
            ) : sebStatus == "confused" ? (
              <img
                src={sebConfused}
                alt="confused emoji"
                className={styles.sebImg}
              />
            ) : (
              <img
                src={sebNeutral}
                alt="neutral emoji"
                className={styles.sebImg}
              />
            )}
            <SentimentAnalyzerComponent childToParent={childToParent} />
          </div>
        </div>
        <div className={[styles.textListBox, "col-xl-4"].join(" ")}>
          <br />
          <h2 className={styles.textListTitle}>Text Log</h2>
          <br />
          <ul className={styles.textList} ref={listRef}>
            {textList.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Wrapper>
        <Link
          to="/react-demo/style-manipulation"
          className={wrapperStyles.previous}
        >
          Previous
        </Link>
        <Link to="/react-demo/resource-rally" className={wrapperStyles.next}>
          Next
        </Link>
      </Wrapper>
      <p className={styles.attribution}>
        Logic for natural language processing based on{" "}
        <a
          target="_blank"
          href="https://towardsdatascience.com/how-to-use-tensorflow-js-in-react-js-sentimental-analysis-59c538c07256"
        >
          code
        </a>{" "}
        provided by Manfye Goh
      </p>
    </div>
  );
}

export default ChatDemoComponent;
