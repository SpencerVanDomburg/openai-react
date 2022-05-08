import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Temperature = ({temperature, setTemperature}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>Temperature ({temperature})</label>
      <div id="parambox" className={styles.parambox}>
          <input
            type="range" 
            step="0.1" 
            min="0.0"
            max="1.0"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
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
      <h2>Temperature</h2>
      <p>Number</p>
      <p>Optional</p>
      <p>Defaults to 1</p>
      <p>
        What sampling temperature to use. Higher values means the 
        model will take more risks. Try 0.9 for more creative applications, 
        and 0 (argmax sampling) for ones with a well-defined answer.
        We generally recommend altering this or top_p but not both.
      </p>
      <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature</p>
    </>  }/>}
    </>
  )
}

export default Temperature;