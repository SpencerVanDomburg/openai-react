import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Query = ({query, setQuery}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
    <label>Query</label>
    <div id="parambox" className={styles.parambox}>
          <input
            type="text"
            placeholder="Enter query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
      <h2>Query</h2>
      <p>String</p>
      <p>Required</p>
      <p>Query to search against the documents.</p>
      <p>https://beta.openai.com/docs/api-reference/searches/create#searches/create-query</p>
    </>  }/>}
  </>
  )
}

export default Query;