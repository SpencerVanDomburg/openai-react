import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Examples = ({examples, setExamples}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
     <label>Examples[[]]</label>
     <div id="parambox" className={styles.parambox}>
          <input
            id="examples"
            type="text"
            placeholder="Enter example context"
            value={examples}
            onChange={(e) => setExamples(e.target.value)}
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
      <h2>Examples</h2>
      <p>Array</p>
      <p>Required</p>
      <p>
        List of (question, answer) pairs that will help steer the model towards the tone and answer format you'd like. We recommend adding 2 to 3 examples.
      </p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-examples</p>
    </>  }/>}
    </>
  )
}

export default Examples;