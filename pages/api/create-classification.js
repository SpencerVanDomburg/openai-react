import React, {Fragment, useState} from "react";
import styles from "../index.module.css";
import axios from "axios";
import SearchModel from "../input-parameters/search-model";
import Model from "../input-parameters/model";
import Examples from "../input-parameters/examples";
import Query from "../input-parameters/query";
import Labels from "../input-parameters/labels";

const CreateClassification = ({url, engineList}) =>{

  // parameters in request body
  const [examples, setExamples] = useState(typeof window !== 'undefined' ? localStorage.getItem("cc-examples") : [[]]);
  const [labels, setLabels] = useState(typeof window !== 'undefined' ? localStorage.getItem("cc-labels") : []);
  const [searchModel, setSearchModel] = useState("ada");
  const [model, setModel] = useState("curie");
  const [query, setQuery] = useState(typeof window !== 'undefined' ? localStorage.getItem("cc-query") : "");

  // result of the request
  const [classificationResult, setClassificationResult] = useState();

const handleSubmit = (e) => {
  e.preventDefault();
  call();
}

async function call () {
  await axios.post(url + "/v1/classifications",
  {
    "examples": [examples.split(",")],       
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
    localStorage.setItem("cc-examples", examples);
    localStorage.setItem("cc-labels", labels);
    localStorage.setItem("cc-query", query);
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