import React, {Fragment, useState} from "react";
import styles from "../index.module.css";
import axios from "axios";
import Input from "../input-parameters/input";
import Instruction from "../input-parameters/instruction";
import Engine from "../input-parameters/engine";
import Temperature from "../input-parameters/temperature";
import TopP from "../input-parameters/top-p";
import {getFloatFromStorageOrDefault, getStringFromStorageOrDefault} from '../storageService';

const CreateEdit = ({url, engineList, setErrorResult}) =>{

  // parameters in request body
  const [input, setInput]             = useState(getStringFromStorageOrDefault(     "ce-input"         , ""));
  const [instruction, setInstruction] = useState(getStringFromStorageOrDefault(     "ce-instruction"   , ""));
  const [temperature, setTemperature] = useState(getFloatFromStorageOrDefault("ce-temperature"   , 1.0));
  const [topP, setTopP]               = useState(getFloatFromStorageOrDefault("ce-top-p"         , 1.0));

 // path variable
 const [engine, setEngine]            = useState(getStringFromStorageOrDefault("ce-engine"        , "text-davinci-edit-001"));

  // result of the request
  const [editResult, setEditResult] = useState();

const handleSubmit = (e) => {
  e.preventDefault();
  call();
}

async function call () {
  await axios.post(url + `/v1/engines/${engine}/edits`,
  {
    "input": input,
    "instruction": instruction
  },
  {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => {
    setEditResult(response.data.body.choices[0].text);
    localStorage.setItem("ce-input", input);
    localStorage.setItem("ce-instruction", instruction);
    localStorage.setItem("ce-temperature", temperature);
    localStorage.setItem("ce-top-p", 1.0);
    localStorage.setItem("ce-engine", engine);
  })
  .catch(error =>{
    setErrorResult("Error message: " + error.message);
  })
}
return (
  <Fragment>
     <h1>Create Edit</h1>
     <div className={styles.result}>{editResult}</div>
        <form onSubmit={handleSubmit}>
          <Input
            input={input}
            setInput={setInput}
           />
          <Instruction
            instruction={instruction}
            setInstruction={setInstruction}
          />
           <Temperature 
            temperature={temperature}
            setTemperature={setTemperature}
          />
          <TopP
            topP = {topP}
            setTopP = {setTopP}
          />
          <Engine
            engine={engine}
            setEngine={setEngine}
            engineList={engineList}
          />
          <input type="submit" value="Create Edit" />
        </form>
  </Fragment>
)
}

export default CreateEdit;