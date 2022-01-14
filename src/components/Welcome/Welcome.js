import styles from "./Welcome.module.css";

function WelcomeComponent() {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Welcome to my interactive React demo</h1>
      <p className={styles.subtitle}>
        This site will showcase some of the skills I've acquired while learning the basics of React
      </p>
    </div>
  );
}

export default WelcomeComponent;
