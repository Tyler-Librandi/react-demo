import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
