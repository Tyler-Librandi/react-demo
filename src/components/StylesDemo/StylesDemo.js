import { useState } from "react";
import styles from "./StylesDemo.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import wrapperStyles from "../Wrapper.module.css";

function StylesDemoComponent() {
  const [colorStyle, setColorStyle] = useState({});
  const [bgStyle, setBgStyle] = useState({});
  const [sizeStyle, setSizeStyle] = useState({});
  const [borderSizeStyle, setBorderSizeStyle] = useState({});
  const [borderColorStyle, setBorderColorStyle] = useState({});
  const [borderRadiusStyle, setBorderRadiusStyle] = useState({});

  const elementInit = (
    <p
      style={{
        ...colorStyle,
        ...bgStyle,
        ...sizeStyle,
        ...borderSizeStyle,
        ...borderColorStyle,
        ...borderRadiusStyle,
      }}
      className={styles.element}
    >
      Click any of the buttons below to change the styling of this sentence!
    </p>
  );
  function changeColor(newStyle) {
    setColorStyle({ color: newStyle });
  }
  function changeBGColor(newStyle) {
    setBgStyle({ backgroundColor: newStyle });
  }
  function changeSize(newStyle) {
    setSizeStyle({ fontSize: newStyle });
  }
  function changeBorderSize(newStyle) {
    setBorderSizeStyle({ borderWidth: newStyle });
  }
  function changeBorderColor(newStyle) {
    setBorderColorStyle({ borderColor: newStyle });
  }
  function changeBorderRadius(newStyle) {
    setBorderRadiusStyle({ borderRadius: newStyle });
  }
  return (
    <div className={styles.stylesDemo}>
      <h1 className={styles.title}>Style Manipulation</h1>
      <div className={styles.elementBox}>{elementInit}</div>

      <div className={[styles.optRow, "row"].join(" ")}>
        <div className={[styles.optCol, "col"].join(" ")}>
          <div className={styles.optionBox}>
            <h4>Font Size</h4>
            <button className={styles.btn} onClick={() => changeSize("18px")}>
              18px
            </button>
            <button className={styles.btn} onClick={() => changeSize("24px")}>
              24px
            </button>
            <button className={styles.btn} onClick={() => changeSize("32px")}>
              32px
            </button>
            <button className={styles.btn} onClick={() => changeSize("20px")}>
              Reset
            </button>
          </div>
        </div>
        <div className={[styles.optCol, "col"].join(" ")}>
          <div className={styles.optionBox}>
            <h4>Font Color</h4>
            <button
              className={styles.btn}
              onClick={() => changeColor("#8A00FF")}
            >
              Violet
            </button>
            <button
              className={styles.btn}
              onClick={() => changeColor("#0EF1D9")}
            >
              Cyan
            </button>
            <button
              className={styles.btn}
              onClick={() => changeColor("#E97916")}
            >
              Orange
            </button>
            <button
              className={styles.btn}
              onClick={() => changeColor("#c0c0c0")}
            >
              Light Gray
            </button>
          </div>
        </div>
      </div>
      <div className={[styles.optRow, "row"].join(" ")}>
        <div className={[styles.optCol, "col"].join(" ")}>
          <div className={styles.optionBox}>
            <h4>Background Color</h4>
            <button
              className={styles.btn}
              onClick={() => changeBGColor("#FF00F4")}
            >
              Magenta
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBGColor("#0E98F1")}
            >
              Blue
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBGColor("#E9E216")}
            >
              Yellow
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBGColor("transparent")}
            >
              None
            </button>
          </div>
        </div>
        <div className={[styles.optCol, "col"].join(" ")}>
          <div className={styles.optionBox}>
            <h4>Border Width</h4>
            <button
              className={styles.btn}
              onClick={() => changeBorderSize("2px")}
            >
              2px
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderSize("4px")}
            >
              4px
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderSize("6px")}
            >
              6px
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderSize("0px")}
            >
              None
            </button>
          </div>
        </div>
      </div>
      <div className={[styles.optRow, "row"].join(" ")}>
        <div className={[styles.optCol, "col"].join(" ")}>
          <div className={styles.optionBox}>
            <h4>Border Color</h4>
            <button
              className={styles.btn}
              onClick={() => changeBorderColor("#0B00FF")}
            >
              Blue
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderColor("#0EF167")}
            >
              Green
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderColor("#E9161D")}
            >
              Red
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderColor("#c0c0c0")}
            >
              Light Gray
            </button>
          </div>
        </div>
        <div className={[styles.optCol, "col"].join(" ")}>
          <div className={styles.optionBox}>
            <h4>Border Radius</h4>
            <button
              className={styles.btn}
              onClick={() => changeBorderRadius("25px")}
            >
              Rounded
            </button>
            <button
              className={styles.btn}
              onClick={() => changeBorderRadius("0px")}
            >
              Squared
            </button>
          </div>
        </div>
      </div>
      <Wrapper>
        <Link to="/react-demo/list-building" className={wrapperStyles.previous}>
          Previous
        </Link>
        <Link to="/react-demo/chat-with-seb" className={wrapperStyles.next}>
          Next
        </Link>
      </Wrapper>
    </div>
  );
}

export default StylesDemoComponent;
