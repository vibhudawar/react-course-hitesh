import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div>
          <button onClick={() => setColor("green")}>Green</button>
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("blue")}>Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
