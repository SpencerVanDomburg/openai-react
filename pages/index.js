import Head from "next/head";
import { useState, useEffect } from "react";
import AskQuestion from "./api/ask-question";
import GetCompletion from "./api/get-completion";
import PerformSearch from "./api/perform-search";
import CreateClassification from "./api/create-classification";
import CreateEdit from "./api/create-edit";
import styles from "./index.module.css";
import axios from "axios";
import {FaQuestionCircle, FaSearch, FaEdit, FaList, FaCodiepie} from 'react-icons/fa';
import {BsCodeSlash} from 'react-icons/bs';
import { getActiveButtonStyle } from "./utilService";


export default function Home() {
  // URL for the proxy
  const LOCAL_HOST = "http://localhost:9080";

  // constants for the different available forms
  const PERFORM_SEARCH        = "perform-search";
  const ASK_QUESTION          = "ask-question";
  const GET_COMPLETION        = "get-completion";
  const CREATE_EDIT           = "create-edit";
  const CREATE_CLASSIFICATION = "create-classification";

  // currently selected form
  const [currentForm, setCurrentForm] = useState(GET_COMPLETION);

  // engine list from Open AI
  const [engineList, setEngineList] = useState([]);

  // error feedback
  const [errorResult, setErrorResult] = useState();

  useEffect(()=>{
    fetchEngineList();
  },[]);

  async function fetchEngineList(){
    await axios.get(LOCAL_HOST + `/v1/engines`)
    .then((response) => {
      const result = response.data.body.data.map(getEngineId);
      setEngineList(result);
    })
    .catch(error =>{
      console.log(error);
      setEngineList(["ada","babbage","curie","davinci"]);
    })
  }

  function getEngineId(engineObject){
    return engineObject.id;
  }

  function buttonClick(clickedButton){
      setCurrentForm(clickedButton);
  }

  function switchModule(){
      switch(currentForm){
          case GET_COMPLETION:
            return <GetCompletion 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                      setErrorResult={setErrorResult}
                    />;
          case ASK_QUESTION:
            return <AskQuestion 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                      setErrorResult={setErrorResult}
                    />;
          case PERFORM_SEARCH:
            return <PerformSearch 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                      setErrorResult={setErrorResult}
                    />;
          case CREATE_CLASSIFICATION:
            return <CreateClassification 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                      setErrorResult={setErrorResult}
                    />;
          case CREATE_EDIT:
            return <CreateEdit 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                      setErrorResult={setErrorResult}
                    />;
          default:
            return <Error/>;
      }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <div className={styles.container} id="container">
        <div id="banner" className={styles.banner}>

          <button 
            onClick={(e)=>buttonClick(GET_COMPLETION)} 
            className={styles.buttonBox}
            style={{backgroundColor: getActiveButtonStyle(currentForm, GET_COMPLETION)}}>
              <FaCodiepie/>
              <div>Get Completion</div>
          </button>

          <button 
            onClick={(e)=>buttonClick(ASK_QUESTION)} 
            className={styles.buttonBox}
            style={{backgroundColor: getActiveButtonStyle(currentForm, ASK_QUESTION)}}>
              <FaQuestionCircle/>
              <div >Ask Question</div>
          </button>

          <button 
            onClick={(e)=>buttonClick(PERFORM_SEARCH)} 
            className={styles.buttonBox}
            style={{backgroundColor: getActiveButtonStyle(currentForm, PERFORM_SEARCH)}}>
              <FaSearch/>
              <div>Perform Search</div>
          </button>

          <button 
            onClick={(e)=>buttonClick(CREATE_CLASSIFICATION)} 
            className={styles.buttonBox}
            style={{backgroundColor: getActiveButtonStyle(currentForm, CREATE_CLASSIFICATION)}}>
              <FaList/>
              <div>Classification</div>
          </button>

          <button 
            onClick={(e)=>buttonClick(CREATE_EDIT)} 
            className={styles.buttonBox}
            style={{backgroundColor: getActiveButtonStyle(currentForm, CREATE_EDIT)}}>
              <FaEdit/>
              <div>Create Edit</div>
          </button>

          {/* <button 
            disabled 
            className={styles.buttonBox}>
              <BsCodeSlash/>
              <div>next</div>
          </button> */}
        </div>

        <main className={styles.main}>
          <div className={styles.error}>{errorResult}</div>
          {switchModule()}
        </main>
      </div>
    </div>
  );
}
