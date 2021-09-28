import React from "react";
import "./App.css";

// import { Counter } from "./features/counter/Counter";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
