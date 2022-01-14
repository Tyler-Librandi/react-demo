import styles from "./ToggleDemo.module.css";
import { useState } from "react";

function ToggleDemoComponent() {
  const [sectionVisibility, setSectionVisibility] = useState(true);
  function toggleSection() {
    setSectionVisibility(!sectionVisibility);
  }
  return (
    <div className={styles.toggleDemo}>
      <h1 className={styles.title}>Element Visibility</h1>
      {sectionVisibility ? (
        <div>
          <p className={styles.subtitle}>
            Click the button below to toggle this element's visibility
          </p>
        </div>
      ) : null}
      <button className={styles.btn} onClick={toggleSection}>
        {sectionVisibility == true ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ToggleDemoComponent;
