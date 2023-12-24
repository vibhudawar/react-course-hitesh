import { getRandomUser } from "./api";
import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { captureScreenshot } from "./functions/capturescreenshot";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };
  return (
    <div className="App">
      <div className="parent-div">
        <div className="post-card" id="capture">
          {userData && <Card data={userData} />}
          <div className="button-group">
            <button onClick={refresh} className="button-74">
              Change
            </button>
            <button onClick={captureScreenshot} className="button-74">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
