import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";

export default function Layout() {
  return (
    <div className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["user"]}>
          <img
            className={styles["avatar"]}
            src="/avatar.png"
            alt="User avatar"
          />
          <div className={styles["name"]}>Юсуп Станский</div>
          <div className={styles["email"]}>qsupstanski@mail.org</div>
        </div>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            <img src="/menu-icon.svg" alt="menu" />
            Menu
          </Link>
          <Link to="/cart" className={styles["link"]}>
            <img src="/cart-icon.svg" alt="icon" />
            Cart
          </Link>
        </div>
        <Button className={styles["exit"]}>
          <img src="/exit-icon.svg" alt="Exit icon" />
          Выход
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
