import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import wrapperStyles from "../Wrapper.module.css";
import styles from "./Welcome.module.css";

function WelcomeComponent() {
  return (
    <div className={[styles.welcome, "row"].join(" ")}>
      <div className="col">
        <h1 className={styles.title}>Welcome to my interactive React demo</h1>
        <p className={styles.subtitle}>
          This site will showcase some of the skills I've acquired while
          learning the basics of React
        </p>
      </div>
      <Wrapper>
        <Link
          to="/react-demo/element-visibility"
          className={wrapperStyles.next}
        >
          Next
        </Link>
      </Wrapper>
    </div>
  );
}

export default WelcomeComponent;
