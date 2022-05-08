import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Model = ({model, setModel, engineList}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>Model</label>
      <div id="parambox" className={styles.parambox}>
           <select
            id="models"
            name="models"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            {engineList.map(engine =>
              <option key={engine} value={engine}>{engine}</option>
              )};
          </select>
          <FaInfoCircle
            role="button"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            size= "25"
          /> 
      </div>
      {showPopup && <Popup content = {
        <>
      <h2>Model</h2>
      <p>String</p>
      <p>Required</p>
      <p>
        ID of the engine to use for completion. You can select one of ada, babbage, curie, or davinci.
      </p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-model</p>
    </>  }/>}
    </>
  )
}

export default Model;