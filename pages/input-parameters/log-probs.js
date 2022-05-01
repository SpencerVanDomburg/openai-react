const LogProbs = ({logProbs, setLogProbs}) => {

  return(
    <>
      <label>log_probs</label>
          <input
            id="log_probs"
            type="text"
            placeholder="Enter logProbs"
            value={logProbs}
            onChange={(e) => setLogProbs(e.target.value)}
          />
    </>
  )


}

export default LogProbs;