import styles from "./ListDemo.module.css";
import { useRef, useState } from "react";
import { FaWindowClose } from 'react-icons/fa';

function ListDemoComponent() {
  const input = useRef();
  const [list, setList] = useState([]);
  let id = 0;
  let addItem = (e) => {
    e.preventDefault();
    if (input.current.value != "") {
      setList([...list, input.current.value]);
      id++;
      input.current.value = null;
    } else {
      return null;
    }
  };

  function removeThisItem(id) {
    list.splice(id, 1);
    setList([...list]);
  }

  return (
    <div className={styles.listDemo}>
      <div className="row">
        <div className="col-6">
          <h1 className={styles.title}>List Building</h1>
          <p className={styles.subtitle}>Enter something below to add it to the list</p>
          <form onSubmit={addItem}>
            <input
              className={styles.listInput}
              type="text"
              ref={input}
              placeholder="Enter text here"
            />
            <button className={styles.btn} type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="col-6">
          <div className={styles.list}>
            <ul>
              <h2 className={styles.listTitle}>A Few of My Favorite Things</h2>
              {list.map((item, id) => (
                <li className={styles.output} key={id}>
                  {item}
                  <button className={styles.deleteBtn} key={id} onClick={() => removeThisItem(id)}>
                  <FaWindowClose />
                  </button>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListDemoComponent;