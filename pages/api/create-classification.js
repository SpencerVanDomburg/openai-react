import React, {Fragment, useState} from "react";
import styles from "../index.module.css";
import axios from "axios";
import SearchModel from "../input-parameters/search-model";
import Model from "../input-parameters/model";
import Examples from "../input-parameters/examples";
import Query from "../input-parameters/query";
import Labels from "../input-parameters/labels";
import {getFromStorageOrDefault} from '../storageService';
import {getExampleContent} from '../utilService';

const CreateClassification = ({url, engineList}) =>{

  // parameters in request body
  const [examples, setExamples]       = useState([]);
  const [labels, setLabels]           = useState(getFromStorageOrDefault("cc-labels"        , []));
  const [searchModel, setSearchModel] = useState(getFromStorageOrDefault("cc-search-model"  ,"ada"));
  const [model, setModel]             = useState(getFromStorageOrDefault("cc-model"         ,"curie"));
  const [query, setQuery]             = useState(getFromStorageOrDefault("cc-query"         , ""));

  // result of the request
  const [classificationResult, setClassificationResult] = useState();

// array for the list of examples to put in the request
const [exampleContent, setExampleContent] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  call();
}

async function call () {
  await axios.post(url + "/v1/classifications",
  {
    "examples": getExampleContent(exampleContent),       
    "labels" : labels.split(","),
    "query" : query,
    "search_model": searchModel,
    "model": model,
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    setClassificationResult(response.data.body.label);
    localStorage.setItem("cc-labels", labels);
    localStorage.setItem("cc-query", query);
    localStorage.setItem("cc-search-model", searchModel);
    localStorage.setItem("cc-model", model);
  })
  .catch(error =>{
    console.log(error);
  })
}
return (
  <Fragment>
     <h1>Create Classification</h1>
     <div className={styles.result}>{classificationResult}</div>
        <form onSubmit={handleSubmit}>
          <Examples
            examples={examples}
            setExamples={setExamples}
            exampleContent={exampleContent}
            setExampleContent={setExampleContent}
           />
          <Labels
            labels={labels}
            setLabels={setLabels}
           />
          <Query
            query={query}
            setQuery={setQuery}
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
          <input type="submit" value="Create Classification" />
        </form>
  </Fragment>
)
}

export default CreateClassification;