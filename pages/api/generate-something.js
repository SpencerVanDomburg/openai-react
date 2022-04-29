import { Configuration, OpenAIApi } from "openai";
import React, {Fragment, useState} from "react";
import styles from "../index.module.css";
import axios from "axios";

const AskQuestion = (props) =>{

  const [question, setQuestion] = useState("");
  const [documents, setDocuments] = useState();

  const [completionResult, setCompletionResult] = useState();

  const OPEN_AI_URL = "https://api.openai.com";
  const OPEN_AI_KEY = "";
  // const OPEN_AI_KEY = process.env.REACT_APP_API_KEY;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handleSubmit = (e) => {
  e.preventDefault();
  call();
}

// example input
// {
//   "documents": ["Puppy A is happy.", "Puppy B is sad."],
//   "question": "Which puppy is happy?",
//   "search_model": "ada",
//   "model": "curie",
//   "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
//   "examples": [["What is human life expectancy in the United States?","78 years."]],    
//   "max_tokens": 5,
//   "stop": ["\n", "<|endoftext|>"]
// }


async function call () {
  await axios.post(OPEN_AI_URL + "/v1/answers",
  {
    "documents": documents,
    "question": question,
    "search_model": "ada",
    "model": "curie",
    "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
    "examples": [["What is human life expectancy in the United States?","78 years."]],    
    "max_tokens": 5,
    "stop": ["\n", "<|endoftext|>"]
  },
  {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPEN_AI_KEY}`,
    }
  })
  .then((response) => {
    console.log(response);
    setCompletionResult(response.data.answers[0]);
    setQuestion("");
    setDocuments("");
  })
  .catch(error =>{
    console.log(error);
  })
}

return (
  <Fragment>
     <h3>Ask a question</h3>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter documents as array"
            value={documents}
            onChange={(e) => setDocuments(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <input type="submit" value="Ask Question" />
        </form>
        <div className={styles.result}>{completionResult}</div>
  </Fragment>
)
}

export default AskQuestion;

