const Prompt = ({prompt, setPrompt}) => {

  return(
    <>
      <label>Prompt</label>
        <input
            id="prompt"
            type="text"
            placeholder="Enter text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
    </>
  )

}

export default Prompt;