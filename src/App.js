import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Activity from "./Activity";

function App() {
  const [router, setRouter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {router < 1 ? <Form setRouter={setRouter} /> : <Activity />}
      </header>
    </div>
  );
}

export default App;
