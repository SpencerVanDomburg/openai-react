import React, {Fragment, useState} from "react";
import styles from "../index.module.css";
import axios from "axios";
import MaxTokens from "../input-parameters/max-tokens";
import Documents from "../input-parameters/documents";
import Question from "../input-parameters/question";
import SearchModel from "../input-parameters/search-model";
import Model from "../input-parameters/model";
import Examples from "../input-parameters/examples";
import ExampleContext from "../input-parameters/example-context";
import {getFromStorageOrDefault} from '../storageService';
import { getExampleContent } from "../utilService";

const AskQuestion = ({url, engineList}) =>{

  // parameters in request body              
  const [question, setQuestion]             = useState(getFromStorageOrDefault("aq-question"        , ""));
  const [documents, setDocuments]           = useState();
  const [examples, setExamples]             = useState([]);
  const [exampleContext, setExampleContext] = useState(getFromStorageOrDefault("aq-example-context" ,""));
  const [searchModel, setSearchModel]       = useState(getFromStorageOrDefault("aq-search-model"    ,"curie"));
  const [model, setModel]                   = useState(getFromStorageOrDefault("aq-model"           ,"curie"));
  const [maxTokens, setMaxTokens]           = useState(5);

  // result of the request
  const [questionResult, setQuestionResult] = useState();

  // array for the list of examples to put in the request
  const [exampleContent, setExampleContent] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  call();
}

async function call () {

  await axios.post(url + "/v1/answers",
  {
    "documents": documents.split(","), 
    "question": question,
    "search_model": searchModel,
    "model": model,
    "examples_context": exampleContext,
    "examples": getExampleContent(exampleContent),    
    "max_tokens": maxTokens,
    "stop": ["\n", "<|endoftext|>"]
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    setQuestionResult(response.data.body.answers[0]);
    localStorage.setItem("aq-question", question);
    localStorage.setItem("aq-search-model", searchModel);
    localStorage.setItem("aq-model", model);
    localStorage.setItem("aq-example-context", exampleContext);
  })
  .catch(error =>{
    console.log(error);
  })
}

return (
  <Fragment>
     <h1>Ask a question</h1>
     <div className={styles.result}>{questionResult}</div>
        <form onSubmit={handleSubmit}>
          <Documents
            documents={documents}
            setDocuments={setDocuments}
           />
          <Question
            question={question}
            setQuestion={setQuestion}
           />
          <SearchModel
            searchModel={searchModel}
            setSearchModel={setSearchModel}
            engineList={engineList}
          />
          <Model
            model={model}
            setModel={setModel}
            engineList={engineList}
          />
          <Examples
            examples={examples}
            setExamples={setExamples}            
            exampleContent={exampleContent}
            setExampleContent={setExampleContent}
          />
          <ExampleContext
            exampleContext={exampleContext}
            setExampleContext={setExampleContext}
          />
          <MaxTokens
            maxTokens={maxTokens}
            setMaxTokens={setMaxTokens}
          />
          <input type="submit" value="Ask Question" />
        </form>
  </Fragment>
)
}



export default AskQuestion;

