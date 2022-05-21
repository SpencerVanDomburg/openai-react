import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const Echo = ({echo, setEcho}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  function setEchoCheckbox(value){
    setEcho(value);
  }

  return (
    <>
      <label>Echo</label>
      <div id="parambox" className={styles.parambox}>
         <input
         type="checkbox"
         checked={echo}
         id="echo"
         name="echo"
         onChange={(e)=> setEchoCheckbox(e.target.checked)}
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
          <h2>Echo</h2>
          <p>Boolean</p>
          <p>Optional</p>
          <p>Defaults to false</p>
          <p>
            Echo back the prompt in addition to the completion.
          </p>
          <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-echo</p>
        </>  
      }/>}
    </>
  )


}

export default Echo;