import React from "react";
import {createRoot} from 'react-dom/client';
//import ReactDOM from "react-dom";
import { App } from "./App";
import "./main.css";

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  </React.StrictMode>,
)*/
const root = createRoot(document.getElementById('root'));

root.render(<App/>);
//ReactDOM.render(<App />, document.getElementById("root"));
