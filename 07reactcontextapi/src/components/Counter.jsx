import { React, useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Counter() {
  const counterState = useContext(CounterContext);

  return (
    <div>
      <div>
        <button onClick={() => counterState.setCount(counterState.count + 1)}>
          Increment
        </button>
        <button onClick={() => counterState.setCount(counterState.count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
