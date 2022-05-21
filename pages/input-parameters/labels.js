import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Labels = ({labels, setLabels}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
      <>
      <label>Labels</label>
      <div id="parambox" className={styles.parambox}>
        <input
            id="labels"
            type="text"
            placeholder="Enter labels as array"
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
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
      <h2>Labels</h2>
      <p>array</p>
      <p>Optional</p>
      <p>Default to null</p>
      <p>
        The set of categories being classified. If not specified, 
        candidate labels will be automatically collected from the 
        examples you provide. All the label strings will be normalized 
        to be capitalized.
      </p>
      <p>https://beta.openai.com/docs/api-reference/classifications/create#classifications/create-labels</p>
    </>  }/>}
      </>

  )

}

export default Labels;