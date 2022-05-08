import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const ExampleContext = ({exampleContext, setExampleContext}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
    <label>Example Context</label>
    <div id="parambox" className={styles.parambox}>
          <input
            type="text"
            placeholder="Enter examples"
            value={exampleContext}
            onChange={(e) => setExampleContext(e.target.value)}
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
      <h2>Examples_context</h2>
      <p>String</p>
      <p>Required</p>
      <p>
        A text snippet containing the contextual information used to generate the answers for the examples you provide.
      </p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-examples_context</p>
    </>  }/>}
    </>
  )
}

export default ExampleContext;