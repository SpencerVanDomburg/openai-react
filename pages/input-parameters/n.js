const N = ({n, setN}) => {

return (
  <>
      <label>n (number of choices in reply)</label>
          <input
            type="number" 
            pattern="[0-9]*" 
            inputmode="numeric"
            placeholder="Enter n as number"
            value={n}
            onChange={(e) => setN(e.target.value)}
      />

  </>
)

}

export default N;