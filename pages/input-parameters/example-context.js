const ExampleContext = ({exampleContext, setExampleContext}) => {

  return(
    <>
    <label>Example Context</label>
          <input
            type="text"
            placeholder="Enter examples"
            value={exampleContext}
            onChange={(e) => setExampleContext(e.target.value)}
          />
    </>
  )
}

export default ExampleContext;