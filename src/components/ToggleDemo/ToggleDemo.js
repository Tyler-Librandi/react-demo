import styles from "./ToggleDemo.module.css";
import { useState } from "react";

function ToggleDemoComponent() {
  const [sectionVisibility, setSectionVisibility] = useState(true);
  function toggleSection() {
    setSectionVisibility(!sectionVisibility);
  }
  return (
    <div className={styles.toggleDemo}>
      {sectionVisibility ? (
        <div>
            <h1>Element Visibility</h1>
          <p>
            This section will demonstrate what I've learned about showing and
            hiding elements in React
          </p>
          <p>Click the button below to toggle this content's visibility</p>
        </div>
      ) : null}
      <button onClick={toggleSection}>{sectionVisibility == true ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default ToggleDemoComponent;
