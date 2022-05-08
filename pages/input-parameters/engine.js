import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Engine = ({engine, setEngine, engineList}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
       <label>Engine (model)</label>
       <div id="parambox" className={styles.parambox}>
           <select
            id="models"
            name="models"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
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
         <h2>Engine</h2>
         <p>String</p>
         <p>Required</p>
         <p>Defaults to curie</p>
         <p>
         The ID of the engine to use for this request
      </p>
      <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-engine_id</p>
    </>  }/>}
    </>
  )

}

export default Engine;