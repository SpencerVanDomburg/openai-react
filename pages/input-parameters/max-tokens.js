import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";
import { preventNegativeNumber } from '../utilService';

const MaxTokens = ({maxTokens, setMaxTokens}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>Max tokens</label>
      <div id="parambox" className={styles.parambox}>
        <input
            type="number" 
            pattern="[0-9]*"
            min="0" 
            inputMode='numeric'
            placeholder="Enter max number of tokens"
            value={maxTokens}
            onChange={(e) => setMaxTokens(preventNegativeNumber(e.target.value))}
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
        <h2>Max Tokens</h2>
        <p>String</p>
        <p>Optional</p>
        <p>Defaults to 16</p>
        <p>
          The maximum number of tokens to generate in the completion.
          The token count of your prompt plus max_tokens cannot exceed 
          the model's context length. Most models have a context length 
          of 2048 tokens (except for the newest models, which support 
          4096).
        </p>
        <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-max_tokens</p>
      </> 
      }/>}
    </>
  )
}

export default MaxTokens;