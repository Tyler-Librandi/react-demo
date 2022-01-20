import styles from "./Home.module.css";
import WelcomeComponent from "../components/Welcome/Welcome";
import ToggleDemo from "../components/ToggleDemo/ToggleDemo";
import ListDemoComponent from "../components/ListDemo/ListDemo";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import StylesDemoComponent from "../components/StylesDemo/StylesDemo";
import ChatDemoComponent from "../components/ChatDemo/ChatDemo";

function HomePage() {
  const [currentModule, setCurrentModule] = useState(0);
  const modules = [
    <WelcomeComponent />,
    <ToggleDemo />,
    <ListDemoComponent />,
    <StylesDemoComponent />,
    <ChatDemoComponent />,
  ];

  function nextDemo() {
    if (currentModule > modules.length - 2) {
      return null;
    } else {
      setCurrentModule(currentModule + 1);
    }
  }

  function previousDemo() {
    setCurrentModule(currentModule - 1);
  }

  return (
    <div>
      {<Wrapper>{modules[currentModule]}</Wrapper>}
      <div className={styles.navButtons}>
        {currentModule == 0 ? (
          <button className={styles.start} onClick={nextDemo}>
            Get Started
          </button>
        ) : null}
        {currentModule > 0 && currentModule < modules.length - 1 ? (
          <button className={styles.next} onClick={nextDemo}>
            Next
          </button>
        ) : null}
        {currentModule > 0 ? (
          <button className={styles.previous} onClick={previousDemo}>
            Previous
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
