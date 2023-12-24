import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl">React app with tailwindCSS</h1>
      <Card name="Vibhu" post="Student" />
      <Card name="Sanskar" post="Student" />
      <Card name="Vansh" post="Student" />
    </>
  );
}

export default App;
