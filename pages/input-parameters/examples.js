const Examples = ({examples, setExamples}) => {

  return(
    <>
     <label>Examples[[]]</label>
          <input
            id="examples"
            type="text"
            placeholder="Enter example context"
            value={examples}
            onChange={(e) => setExamples(e.target.value)}
          />
    </>
  )
}

export default Examples;