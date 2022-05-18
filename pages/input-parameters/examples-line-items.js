import { useState, useEffect } from "react";

const ExampleLineItem = ({id, exampleContent, setExampleContent}) => {

const [lineId, setLineId] = useState();
const [line, setLine] = useState("example1, example1");

useEffect(()=>{
  setLineId(id);
  updateLine(lineId, line);
})

/**
 * Updating the line based on the id
 * 
 * @param {the id of the example} id 
 * @param {the content of the example} content 
 */
function updateLine (id, content){
  const newArray = [...exampleContent];
  newArray[id-1] = content;
  setExampleContent(newArray);
}

  return (
    <li key={id}>
          <input
            id="example"
            type="text"
            placeholder="Use a comma to seperate question from answer"
            value={line}
            onChange={(e) => setLine(e.target.value)}
            required
          />  
    </li>
  )
}

export default ExampleLineItem;