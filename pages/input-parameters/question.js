const Question = ({question, setQuestion}) => {

  return(
    <>
    <label>Question</label>
          <input
            type="text"
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
    </>
  )
}

export default Question;