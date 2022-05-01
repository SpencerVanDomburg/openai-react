const Model = ({model, setModel}) => {

  return(
    <>
      <label>Model</label>
           <select
            id="models"
            name="models"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="ada">ada</option>
            <option value="babbage">babbage</option>
            <option value="curie">curie</option>
            <option value="davinci">davinci</option>
          </select>
    </>
  )
}

export default Model;