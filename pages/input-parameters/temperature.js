const Temperature = ({temperature, setTemperature}) => {


  return(
    <>
      <label>Temperature ({temperature})</label>
          <input
            type="range" 
            step="0.1" 
            min="0.0"
            max="1.0"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
    </>
  )
}

export default Temperature;