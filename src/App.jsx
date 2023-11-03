import React from "react";
import Osc1 from "./components/Osc1";
import Filter from "./components/Filter";
import "./App.scss";
import { osc1 } from "./context/Store";


function App() {

  return (
    <>
      <div className="App">
        <h1 className="center">Alec-Synth</h1>
        <div >
        <button onClick={() => osc1.start()}>start</button>
        <button onClick={() => osc1.stop()}>stop</button>
      </div>
        <Osc1 />
        <Filter />
      </div>
    </>
  );
}

export default App;

/*

Uncaught DOMException: AudioScheduledSourceNode.start: Can't call start() more than once
    reducer Store.jsx:34
    React 3
    Store Store.jsx:60
    React 17
    onClick Osc1.jsx:23
    React 23
    <anonymous> main.jsx:7
Store.jsx:34:6
    reducer Store.jsx:34
    React 3
    Store Store.jsx:60
    React 17
    onClick Osc1.jsx:23
    React 19
    forEach self-hosted:4409
    React 4
    <anonymous> main.jsx:7
The above error occurred in the <Store> component:

Store@http://127.0.0.1:5173/src/context/Store.jsx:83:27

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries. 127.0.0.1:5173:12966:25
Uncaught DOMException: AudioScheduledSourceNode.start: Can't call start() more than once
    reducer Store.jsx:34
    React 3
    Store Store.jsx:60
    React 14
    onClick Osc1.jsx:23
    React 23
    <anonymous> main.jsx:7
Store.jsx:34:6
Source map error: Error: request failed with status 404
Resource URL: null
Source Map URL: react_devtools_backend_compact.js.map

*/
