import styles from "./ListDemo.module.css";
import { useState } from "react";

function ListDemoComponent() {
  const [display, setDisplay] = useState('');

  return (
    <div className={styles.listDemo}>
      <h1>List Manipulation</h1>
      <p>I've also learned how to create dynamic lists</p>
      <p>Enter something below to add it to the list</p>
      <button>Add</button>
      <input type="text" onChange={(e) => {setDisplay(e.target.value)}} />
      <div className={styles.list}>
        <p>{display}</p>
      </div>
    </div>
  );
}

export default ListDemoComponent;
