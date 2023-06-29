import React from "react";
import PlaySvg from "../../../../svg/PlaySvg";
import styles from "../styles.module.scss";
const PlayBtn = () => {
  return (
    <button className={styles.playbtn}>
      <PlaySvg />
    </button>
  );
};

export default PlayBtn;
