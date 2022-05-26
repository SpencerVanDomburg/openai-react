import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Stream = ({stream, setStream}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  function setStreamCheckbox(value){
    setStream(value);
  }

  return (
      <>
       <label>Stream (hardcoded to false for now)</label>
       <div id="parambox" className={styles.parambox}>
          <input
          type="checkbox"
          id="stream"
          checked={false}// hardcode to false, response is no JSON and is not handled yet
          // checked={stream}
          name="stream"
          // onChange={(e)=> setStreamCheckbox(e.target.checked)}
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
          <h2>Stream</h2>
          <p>Boolean</p>
          <p>Optional</p>
          <p>Defaults to false</p>
          <p>
            Whether to stream back partial progress. If set, tokens will be sent 
            as data-only server-sent events as they become available, with the 
            stream terminated by a data: [DONE] message.
          </p>
          <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream</p>
    </>  }/>}
      </>
  )


}

export default Stream;