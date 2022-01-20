import styles from "./Wrapper.module.css";

function Wrapper(props) {
  return <div className={styles.navBtns}>{props.children}</div>;
}

export default Wrapper;
