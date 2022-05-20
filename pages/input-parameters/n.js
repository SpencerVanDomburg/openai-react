import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const N = ({n, setN}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

return (
  <>
      <label>n (number of choices in reply)</label>
      <div id="parambox" className={styles.parambox}>
          <input
            type="number" 
            pattern="[0-9]*" 
            inputMode="numeric"
            placeholder="Enter n as number"
            value={n}
            onChange={(e) => setN(e.target.value)}
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
          <h2>n (number of choices in reply</h2>
          <p>Integer</p>
          <p>Optional</p>
          <p>Defaults to 1</p>
          <p>
            How many completions to generate for each prompt.
            Note: Because this parameter generates many completions, 
            it can quickly consume your token quota. Use carefully and 
            ensure that you have reasonable settings for max_tokens and 
            stop.
          </p>
          <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-n</p>
        </>  
      }/>}

  </>
)

}

export default N;