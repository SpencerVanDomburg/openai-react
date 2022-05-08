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
    console.log("inside setStreamCheckbox");
    if (value==="on"){
      setStream(true); 
    } else {
    setStream(false);
    }
  }

  return (
      <>
       <label>Stream</label>
       <div id="parambox" className={styles.parambox}>
          <input
          type="checkbox"
          id="stream"
          name="stream"
          onChange={(e)=> setStreamCheckbox(e.target.value)}
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