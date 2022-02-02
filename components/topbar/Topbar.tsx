import { ReactChild, ReactChildren } from "react";
import styles from "./../../styles/Home.module.sass";

export default function Topbar({
  children,
}: {
  children: ReactChild | ReactChild[];
}) {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.toggle_btn}>|||</div>
        <div className={styles.myname}>{children}</div>
      </div>
    </>
  );
}
