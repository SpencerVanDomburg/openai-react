import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";
import { preventNegativeNumber } from '../utilService';

const LogProbs = ({logProbs, setLogProbs}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return(
    <>
      <label>log_probs</label>
      <div id="parambox" className={styles.parambox}>
          <input
            id="number"
            type="number"
            min="0"
            pattern="[0-9]"
            inputMode="numeric"
            placeholder="Enter logProbs as number"
            value={logProbs}
            onChange={(e) => setLogProbs(preventNegativeNumber(e.target.value))}
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
          <h2>log_probs</h2>
          <p>integer</p>
          <p>Optional</p>
          <p>Defaults to null</p>
          <p>
            Include the log probabilities on the logprobs most likely tokens, 
            as well the chosen tokens. For example, if logprobs is 5, the API 
            will return a list of the 5 most likely tokens. The API will always 
            return the logprob of the sampled token, so there may be up to logprobs+1 
            elements in the response.
          </p>    
          <p>
            The maximum value for logprobs is 5. If you need more than this, 
            please contact support@openai.com and describe your use case.
          </p>
      
      <p>https://beta.openai.com/docs/api-reference/completions/create#completions/create-logprobs</p>
    </>  }/>}
    </>
  )


}

export default LogProbs;