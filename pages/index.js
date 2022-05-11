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


export default function Home() {
  const LOCAL_HOST = "http://localhost:9080";
  const PERFORM_SEARCH ="perform-search";
  const ASK_QUESTION = "ask-question";
  const GET_COMPLETION = "get-completion";
  const CREATE_EDIT = "create-edit";
  const CREATE_CLASSIFICATION = "create-classification";
  const [currentForm, setCurrentForm] = useState(typeof window !== 'undefined' ? localStorage.getItem("currentForm") :PERFORM_SEARCH);
  const [engineList, setEngineList] = useState([]);

  useEffect(()=>{
    fetchEngineList();
  },[]);

  useEffect(() =>{
    console.log('form is now: ' + currentForm);
  },[currentForm]);

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
      localStorage.setItem("currentForm", clickedButton);
      setCurrentForm(clickedButton);
  }

  function switchModule(){
      switch(currentForm){
          case GET_COMPLETION:
            return <GetCompletion 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                    />;
          case ASK_QUESTION:
            return <AskQuestion 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                    />;
          case PERFORM_SEARCH:
            return <PerformSearch 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                    />;
          case CREATE_CLASSIFICATION:
            return <CreateClassification 
                      url={LOCAL_HOST} 
                      engineList={engineList}
                    />;
          case CREATE_EDIT:
            return <CreateEdit 
                      url={LOCAL_HOST} 
                      engineList={engineList}
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
      <div className={styles.container}>

      <div id="banner" className={styles.banner}>
        <button onClick={(e)=>buttonClick(GET_COMPLETION)} className={styles.buttonBox}>
          <FaCodiepie/>
          <div>Get Completion</div>
        </button>
        <button onClick={(e)=>buttonClick(ASK_QUESTION)} className={styles.buttonBox}>
            <FaQuestionCircle/>
            <div >Ask Question</div>
        </button>
        <button onClick={(e)=>buttonClick(PERFORM_SEARCH)} className={styles.buttonBox}>
            <FaSearch/>
          <div>Perform Search</div>
        </button>
        <button onClick={(e)=>buttonClick(CREATE_CLASSIFICATION)} className={styles.buttonBox}>
          <FaList/>
          <div>Classification</div>
        </button>
        <button onClick={(e)=>buttonClick(CREATE_EDIT)} className={styles.buttonBox}>
          <FaEdit/>
          <div>Create Edit</div>
        </button>
        <button disabled className={styles.buttonBox}>
          <BsCodeSlash/>
          <div>next</div>
        </button>
      </div>

      <main className={styles.main}>
        {switchModule()}
      </main>
      </div>
    </div>
  );
}
