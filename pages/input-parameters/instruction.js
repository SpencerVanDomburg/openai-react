import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Instruction = ({instruction, setInstruction}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>Instruction</label>
      <div id="parambox" className={styles.parambox}>
        <input
            id="instruction"
            type="text"
            placeholder="Enter text"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
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
      <h2>Instruction</h2>
      <p>String</p>
      <p>Required</p>
      <p>
        The instruction that tells the model how to edit the prompt.
      </p>
      <p>https://beta.openai.com/docs/api-reference/edits/create#edits/create-instruction</p>
    </>  }/>}
    </>
  )

}

export default Instruction;