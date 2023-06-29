import React from "react";
import styles from "../../../sass/Input.module.scss";
interface IText {
  text: string;
  type: string;
}
const Input = (props: IText) => {
  return (
    <>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.text}
      />
      {/* <label className={styles.label}>{props.text}</label> */}
    </>
  );
};

export default Input;
