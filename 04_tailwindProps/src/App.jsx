import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0);
  const obj1={
    username:"chai aur code",
    description:"chai aur code is a youtube channel"
  }

  const obj2={
    username:"shekhar ki coffee",
    description:"shekhar ki coffee is a youtube channel"
  }
  return (
    <>
      <h1 className="bg-green-400 mb-5">This is tailwind</h1>
      <Card obj={obj1}/>
      <Card obj={obj2}/>
    </>
  );
}

export default App;
