const MaxTokens = ({maxTokens, setMaxTokens}) => {


  return(
    <>
      <label>Max tokens</label>
      <input
            type="number" 
            pattern="[0-9]*" 
            inputmode="numeric"
            placeholder="Enter max number of tokens"
            value={maxTokens}
            onChange={(e) => setMaxTokens(e.target.value)}
        />
    </>
  )
}

export default MaxTokens;