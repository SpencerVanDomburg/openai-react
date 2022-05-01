const TopP = ({topP, setTopP}) => {

  return (
    <>
      <label>top_p</label>
            <input
              type="number" 
              pattern="[0-9]*" 
              inputmode="numeric"
              placeholder="Enter top_p as number"
              value={topP}
              onChange={(e) => setTopP(e.target.value)}
            />
    </>
  )
} 

export default TopP;