const SearchModel = ({searchModel, setSearchModel}) => {

  return (
    <>
      <label>Search Model</label>
           <select
            id="models"
            name="models"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
          >
            <option value="ada">ada</option>
            <option value="babbage">babbage</option>
            <option value="curie">curie</option>
            <option value="davinci">davinci</option>
          </select>
    </>
  )

}

export default SearchModel;