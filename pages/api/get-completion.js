import React, {Fragment, useState} from "react";
import styles from "../index.module.css";
import axios from "axios";
import Temperature from "../input-parameters/temperature";
import MaxTokens from "../input-parameters/max-tokens";
import Prompt from "../input-parameters/prompt";
import TopP from "../input-parameters/top-p";
import N from "../input-parameters/n";
import Stream from "../input-parameters/stream";
import LogProbs from "../input-parameters/log-probs";
import Stop from "../input-parameters/stop";
import Engine from "../input-parameters/engine";

const GetCompletion = ({url, engineList}) =>{

  // parameters of the request body
  const [prompt, setPrompt]           = useState(typeof window !== 'undefined' ? localStorage.getItem("gc-prompt") : "can you complete this ");
  const [maxTokens, setMaxTokens]     = useState(5);
  const [temperature, setTemperature] = useState(1.0);
  const [topP, setTopP]               = useState(1.0);
  const [n, setN]                     = useState(1);
  const [stream, setStream]           = useState(false);
  const [logProbs, setLogProbs]       = useState(null);
  const [stop, setStop]               = useState("\n");
  
  // path variable
  const [engine, setEngine] = useState("curie");
  
  // the result of the request
  const [completionResult, setCompletionResult] = useState();

  
const handleSubmit = (e) => {
  e.preventDefault();
  call();
}

async function call () {
  await axios.post(url + `/v1/engines/${engine}/completions`,
  {
    "prompt": prompt,
    "max_tokens": maxTokens,
    "temperature": temperature,
    "top_p": topP,
    "n": n,
    "stream": stream,
    "logprobs": logProbs,
    "stop": stop
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    setCompletionResult(response.data.body.choices[0].text);
    localStorage.setItem("gc-prompt", prompt);
  })
  .catch(error =>{
    console.log(error);
  })
}

return (
  <Fragment>
     <h1>Complete your text input:</h1>
     <div className={styles.result}>{completionResult}</div>
        <form onSubmit={handleSubmit}>
          <Prompt
            prompt={prompt}
            setPrompt={setPrompt}
          />
          <MaxTokens
            maxTokens={maxTokens}
            setMaxTokens={setMaxTokens}
          />
          <Temperature 
            temperature={temperature}
            setTemperature={setTemperature}
          />
          <TopP
            topP = {topP}
            setTopP = {setTopP}
          />
          <N
            n = {n}
            setN = {setN}
          />
          <Stream
            stream={stream}
            setStream={setStream}
          />
          <LogProbs
            logProbs={logProbs}
            setLogProbs={setLogProbs}
          />
          <Stop
            stop={stop}
            setSTop={setStop}
          />
          <Engine
            engine={engine}
            setEngine={setEngine}
            engineList={engineList}
          />
          <input type="submit" value="Get Completion" />
        </form>
  </Fragment>
)
}

export default GetCompletion;