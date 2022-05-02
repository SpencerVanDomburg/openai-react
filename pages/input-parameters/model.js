const Model = ({model, setModel, engineList}) => {

  return(
    <>
      <label>Model</label>
           <select
            id="models"
            name="models"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            {engineList.map(engine =>
              <option key={engine} value={engine}>{engine}</option>
              )};
          </select>
    </>
  )
}

export default Model;