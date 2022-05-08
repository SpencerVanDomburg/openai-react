import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Prompt = ({prompt, setPrompt}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>Prompt</label>
      <div id="parambox" className={styles.parambox}>
        <input
            id="prompt"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
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
      <h2>Prompt</h2>
      <p>String or array</p>
      <p>Optional</p>
      <p>Defaults to endoftext</p>
      <p>
        The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
  
        Note that endoftext is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
      </p>
      <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-prompt</p>
    </>  }/>}
    </>
  )

}

export default Prompt;