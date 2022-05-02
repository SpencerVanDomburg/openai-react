import Head from "next/head";
import { useState, useEffect } from "react";
import AskQuestion from "./api/ask-question";
import GetCompletion from "./api/get-completion";
import styles from "./index.module.css";
import axios from "axios";

export default function Home() {
  const LOCAL_HOST = "http://localhost:9080";
  const [currentForm, setCurrentForm] = useState("get-completion");
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
      console.log(response);
      console.log(response.data.body.data);
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
          case "get-completion":
            return <GetCompletion url={LOCAL_HOST} engineList={engineList}/>;
          case "ask-question":
            return <AskQuestion url={LOCAL_HOST} engineList={engineList}/>;
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
        <button onClick={(e)=>buttonClick("get-completion")}>Get Completion</button>
        <button onClick={(e)=>buttonClick("ask-question")}>Ask Question</button>
        <button disabled>next</button>
        <button disabled>next</button>
        <button disabled>next</button>
        <button disabled>next</button>
      </div>

      <main className={styles.main}>
        {switchModule()}
      </main>
      </div>
    </div>
  );
}
