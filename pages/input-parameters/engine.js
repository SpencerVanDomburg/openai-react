const Engine = ({engine, setEngine}) => {

  return(
    <>
       <label>Engine (model)</label>
           <select
            id="models"
            name="models"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
          >
            <option value="ada">ada</option>
            <option value="babbage">babbage</option>
            <option value="curie">curie</option>
            <option value="davinci">davinci</option>
          </select>   
    </>
  )

}

export default Engine;