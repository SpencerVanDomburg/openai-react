import {FaInfoCircle, FaPlusSquare, FaMinusSquare} from 'react-icons/fa'
import { useState, useEffect} from "react";
import styles from "../index.module.css";
import Popup from "../Popup";
import ExampleLineItem from './examples-line-items';

const Examples = ({examples, setExamples, exampleContent, setExampleContent}) => {

  const [showPopup, setShowPopup] = useState(false);
  const [nextId, setNextId] = useState(1);
  
  useEffect(()=>{
    handlePlus();
  },[]);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  const handlePlus =() => {
    setExamples(examples.concat(
      <ExampleLineItem 
        id={nextId}
        exampleContent={exampleContent}
        setExampleContent={setExampleContent}
      />
    ));
    setNextId(nextId+1);
  };

  const handleMinus = () => {
    if (examples.length > 1) {
      setExamples(examples => {return examples.slice(0,examples.length-1)});
      setExampleContent(exampleContent => {return exampleContent.slice(0,exampleContent.length-1)});
      setNextId(nextId-1);
    }
  }

  return(
    <>  
     <div className={styles.examplesBox}>
     <label>Examples</label>
     <FaPlusSquare
            role="button"
            onClick={handlePlus}
            size= "25"
          />
      {examples && 
        <FaMinusSquare
            role="button"
            onClick={handleMinus}
            size="25"
        />}
        </div>
     <div id="parambox" className={styles.parambox}>
      <ul>
          {examples}
      </ul>
      <FaInfoCircle
            role="button"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            size= "25"
          /> 
    </div>
      {showPopup && <Popup content = {
        <>
      <h2>Examples</h2>
      <p>Array</p>
      <p>Required</p>
      <p>
        List of (question, answer) pairs that will help steer the model towards the tone and answer format you'd like. We recommend adding 2 to 3 examples.
      </p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-examples</p>
    </>  }/>}
    </>
  )
}

export default Examples;