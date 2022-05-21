import React, {Fragment, useState, useEffect} from "react";
import styles from "../index.module.css";
import axios from "axios";
import Documents from "../input-parameters/documents";
import Query from "../input-parameters/query";
import Engine from "../input-parameters/engine";
import {getStringFromStorageOrDefault} from '../storageService';

const PerformSearch = ({url, engineList, setErrorResult}) =>{

  // request body params
  const [documents, setDocuments] = useState(getStringFromStorageOrDefault("ps-documents", ""));
  const [query, setQuery]         = useState(getStringFromStorageOrDefault("ps-query", ""));

  // path variable
  const [engine, setEngine] = useState(getStringFromStorageOrDefault("ps-engine", "curie"));
  
  // the result of the request
  const [searchResult, setSearchResult] = useState([]);

  
  useEffect(()=>{
    setSearchResult([]);
  },[documents]);

  const handleSubmit = (e) => {
    e.preventDefault();
    call();
  }
  
  async function call () {
    await axios.post(url + `/v1/engines/${engine}/search`,
    {
      "documents": documents.split(","),
      "query": query
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      response.data.body.data.sort(function(a,b){  
        return b.score - a.score;
      });
      setErrorResult("");
      setSearchResult(response.data.body.data);
      localStorage.setItem("ps-documents",documents);
      localStorage.setItem("ps-query", query);
      localStorage.setItem("ps-engine", engine);
    })
    .catch(error =>{
      setErrorResult("Error message: " + error.message);
    })
  }

  return (
    <Fragment>
       <h1>Perform search: "{query}"</h1>
       <table className={styles.result}>
         <tbody> 
          <tr id="tableHeaders">
              <th>#</th>
              <th>Document</th>
              <th>Score</th>
          </tr>
          {searchResult.map(result =>
          <tr key={result.document} value={result.document}>
            <td>{result.document} </td>
            <td>{documents.split(",")[result.document]}</td>
            <td>{result.score}</td>
          </tr>
          )}
          </tbody>
         </table>
          <form onSubmit={handleSubmit}>
            <Documents
              documents={documents}
              setDocuments={setDocuments}
             />
             <Query
              query={query}
              setQuery={setQuery}
             />
            <Engine
              engine={engine}
              setEngine={setEngine}
              engineList={engineList}
            />
            <input type="submit" value="Perform Search" />
          </form>
    </Fragment>
  )
  
}

export default PerformSearch;