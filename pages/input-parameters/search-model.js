const SearchModel = ({searchModel, setSearchModel, engineList}) => {

  return (
    <>
      <label>Search Model</label>
           <select
            id="models"
            name="models"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
          >
            {engineList.map(engine =>
              <option key={engine} value={engine}>{engine}</option>
              )};
          </select>
    </>
  )

}

export default SearchModel;