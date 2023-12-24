import "./App.css";
import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price="100000" />
      <Item name="iPhone 15" price="45000" />
      <Item name="Air buds Pro" price="5000" />
      <Cart />
    </div>
  );
}

export default App;
