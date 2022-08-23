import React from "react";
import ReactDOM from 'react-dom/client';
import Counter from "./components/Counter";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){
  return (
  <>
  <h1>React Ground Zero</h1>
  <Counter/>
  </>
  )
}

root.render(<App/>);