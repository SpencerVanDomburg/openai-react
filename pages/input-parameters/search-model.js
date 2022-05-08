import {FaInfoCircle} from 'react-icons/fa'
import { useState } from "react";
import styles from "../index.module.css";
import Popup from "../Popup";

const SearchModel = ({searchModel, setSearchModel, engineList}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleMouseOver = () => {
    setShowPopup(true);
  }

  const handleMouseLeave = () => {
    setShowPopup(false);
  }

  return (
    <>
      <label>Search Model</label>
      <div id="parambox" className={styles.parambox}>
           <select
            id="models"
            name="models"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
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
      <h2>Search Model</h2>
      <p>String</p>
      <p>Optional</p>
      <p>Defaults to ada</p>
      <p>
        ID of the engine to use for Search. You can select one of ada, babbage, curie, or davinci.
      </p>
      <p>https://beta.openai.com/docs/api-reference/answers/create#answers/create-search_model</p>
    </>  }/>}
    </>
  )

}

export default SearchModel;