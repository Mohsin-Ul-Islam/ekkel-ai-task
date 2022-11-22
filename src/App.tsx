import Adder from "./components/Adder";
import Counter from "./components/Counter";
import Divider from "./components/Divider";
import Multiplier from "./components/Multiplier";
import Subtracter from "./components/Subtracter";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Adder />
      <Divider />
      <Counter />
      <Subtracter />
      <Multiplier />
    </div>
  );
}

export default App;
