import PropTypes from "prop-types";
import styles from "./Button.module.css";
//porpTypes method 를 사용하기 위해서 npm i PropTypes

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

//component 의 proptype을 정의함
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;