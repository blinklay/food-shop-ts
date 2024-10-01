import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <>
      <div className={styles["head"]}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
    </>
  );
}
