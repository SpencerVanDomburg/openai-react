import React, {Fragment, useState, useEffect} from "react";
import styles from "../index.module.css";
import axios from "axios";
import Documents from "../input-parameters/documents";
import Query from "../input-parameters/query";
import Engine from "../input-parameters/engine";

const PerformSearch = ({url, engineList}) =>{

  // request body params
  const [documents, setDocuments] = useState();
  const [query, setQuery] = useState();

  // path variable
  const [engine, setEngine] = useState("curie");
  
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
      setSearchResult(response.data.body.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <Fragment>
       <h1>Perform search</h1>
       <table className={styles.result}>
         <tbody> 
          <tr id="tableHeaders">
              <th>#</th>
              <th>Document</th>
              <th>Score</th>
          </tr>
          {searchResult.map(result =>
          <tr key={result.document} value={result.document}>
            <td>
              {result.document} 
            </td>
            <td>
              {documents.split(",")[result.document]}  
            </td>
            <td>
              {result.score}
            </td>
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