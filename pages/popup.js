import React from 'react';
import styles from "./index.module.css";

const Popup = ({content}) => {
  return (
    <div className={styles.popupBox}>
      <div className={styles.insidePopupBox}>
      {content}
      </div>
    </div>
  )
}

export default Popup;