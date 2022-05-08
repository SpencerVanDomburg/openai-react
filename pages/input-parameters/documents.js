import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Documents = ({documents, setDocuments}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
      <>
      <label>Documents []</label>
      <div id="parambox" className={styles.parambox}>
        <input
            id="documents"
            type="text"
            placeholder="Enter documents as array"
            value={documents}
            onChange={(e) => setDocuments(e.target.value)}
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
      <h2>Documents</h2>
      <p>array</p>
      <p>Optional</p>
      <p>
        List of documents from which the answer for the input question 
        should be derived. If this is an empty list, the question will be answered based on the question-answer examples.
        You should specify either documents or a file, but not both.
      </p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-documents</p>
    </>  }/>}
      </>

  )

}

export default Documents;