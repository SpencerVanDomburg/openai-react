const Documents = ({documents, setDocuments}) => {

  return(
      <>
      <label>Documents []</label>
        <input
            id="documents"
            type="text"
            placeholder="Enter documents as array"
            value={documents}
            onChange={(e) => setDocuments(e.target.value)}
          />
      </>

  )

}

export default Documents;