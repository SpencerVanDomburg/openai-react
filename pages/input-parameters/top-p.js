import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const TopP = ({topP, setTopP}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return (
    <>
      <label>top_p ({topP})</label>
      <div id="parambox" className={styles.parambox}>
      <input
            type="range" 
            step="0.1" 
            min="0.0"
            max="1.0"
            value={topP}
            onChange={(e) => setTopP(e.target.value)}
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
      <h2>top_p</h2>
      <p>Integer</p>
      <p>Optional</p>
      <p>Defaults to 1</p>
      <p>
        An alternative to sampling with temperature, called nucleus 
        sampling, where the model considers the results of the tokens with top_p 
        probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
        We generally recommend altering this or temperature but not both.
      </p>
      <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-top_p</p>
    </>  }/>}
    </>
  )
} 

export default TopP;