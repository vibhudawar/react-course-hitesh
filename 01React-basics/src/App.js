import { useState } from "react";

function App() {
  // use state hook returns the array and first element is variable and second being the function
  // useState hook takes the initial value of the variable as the input
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Course with Hitesh</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>footer: {counter} </footer>
    </>
  );
}

export default App;
