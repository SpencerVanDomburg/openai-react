const Stream = ({stream, setStream}) => {


  function setStreamCheckbox(value){
    console.log("inside setStreamCheckbox");
    if (value==="on"){
      setStream(true); 
    } else {
    setStream(false);
    }
  }

  return (
      <>
       <label>Stream</label>
          <input
          type="checkbox"
          id="stream"
          name="stream"
          onChange={(e)=> setStreamCheckbox(e.target.value)}
          />  
      </>
  )


}

export default Stream;