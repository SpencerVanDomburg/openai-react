import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Input = ({input, setInput}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>Input</label>
      <div id="parambox" className={styles.parambox}>
        <input
            id="input"
            type="text"
            placeholder="Enter text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FaInfoCircle
            role="button"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            size= "25"
          /> 
      </div>
      {showPopup && <Popup content = {
        <>
      <h2>Input</h2>
      <p>String</p>
      <p>Optional</p>
      <p>Defaults to empty String</p>
      <p>
        The input text to use as a starting point for the edit.
      </p>
      <p>https://beta.openai.com/docs/api-reference/edits/create#edits/create-input</p>
    </>  }/>}
    </>
  )

}

export default Input;