import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Stop = ({stop, setStop}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
      <>
      <label>Stop</label>
      <div id="parambox" className={styles.parambox}>
          <input
            id="stop"
            type="text"
            placeholder="Enter stop"
            value={stop}
            onChange={(e) => setStop(e.target.value)}
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
        <h2>Stop</h2>
        <p>String or array</p>
        <p>Optional</p>
        <p>Defaults to null</p>
        <p>
          Up to 4 sequences where the API will stop generating further tokens. 
          The returned text will not contain the stop sequence.
        </p>
        <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-stop</p>
        </>  }/>}
      </>

  )
}

export default Stop;