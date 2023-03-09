import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Router>
  //   <Route path={'app'} component={App}/>
  //   <Route path={'activity'} component={Activity}/>
  // </Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
