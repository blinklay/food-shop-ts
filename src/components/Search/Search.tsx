import { forwardRef } from "react";
import cn from "classnames";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { isValid = true, className, ...props }: SearchProps,
  ref
) {
  return (
    <div className={styles["input-wrapper"]}>
      <input
        ref={ref}
        className={cn(styles["input"], className, {
          [styles["invalid"]]: isValid,
        })}
        {...props}
      />
      <img
        className={styles["icon"]}
        src="/seasrch-icon.svg"
        alt="Search icon"
      />
    </div>
  );
});

export default Search;
