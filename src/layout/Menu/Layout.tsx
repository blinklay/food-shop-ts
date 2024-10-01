import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/Button/Button";
import { useEffect } from "react";
import cn from "classnames";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/menu-icon.svg" alt="menu" />
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src="/cart-icon.svg" alt="icon" />
            Cart
          </NavLink>
        </div>
        <Button className={styles["exit"]}>
          <img src="/exit-icon.svg" alt="Exit icon" />
          Выход
        </Button>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
}
