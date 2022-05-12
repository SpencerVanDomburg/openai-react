import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Question = ({question, setQuestion}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
    <label>Question</label>
    <div id="parambox" className={styles.parambox}>
          <input
            type="text"
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
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
      <h2>Question</h2>
      <p>String</p>
      <p>Required</p>
      <p> Question to get answered.</p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-question</p>
    </>  }/>}
  </>
  )
}

export default Question;