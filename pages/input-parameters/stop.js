const Stop = ({stop, setStop}) => {


  return(
      <>
      <label>Stop</label>
          <input
            id="stop"
            type="text"
            placeholder="Enter stop"
            value={stop}
            onChange={(e) => setStop(e.target.value)}
          />
      </>

  )
}

export default Stop;