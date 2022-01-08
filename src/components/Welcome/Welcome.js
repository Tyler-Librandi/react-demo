import styles from "./Welcome.module.css";

function WelcomeComponent() {
  return (
    <div className={styles.welcome}>
      <h1 >Welcome to my interactive React demo</h1>
      <p>
        This website will showcase all of the skills I've acquired thus far on
        my journey of learning the basics of React
      </p>
    </div>
  );
}

export default WelcomeComponent;
