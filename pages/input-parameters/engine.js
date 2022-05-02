const Engine = ({engine, setEngine, engineList}) => {

  return(
    <>
       <label>Engine (model)</label>
           <select
            id="models"
            name="models"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          >
            {engineList.map(engine =>
              <option key={engine} value={engine}>{engine}</option>)};
            
            {/* <option value="ada">ada</option>
            <option value="babbage">babbage</option>
            <option value="curie">curie</option>
            <option value="davinci">davinci</option> */}
          </select>   
    </>
  )

}

export default Engine;