import { useState, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  
  document.querySelector("body").style.backgroundColor = color;
  

  return (
    <div className="big-container">
      <div className="container">
        <button onClick={()=>setColor("Red")} className="btn" style={{backgroundColor:"red", color:"white"}} id="Red">
          Red
        </button>
        <button onClick={()=>setColor("green")} className="btn" style={{backgroundColor:"Green", color:"white"}} id="Green">
          Green
        </button>
        <button onClick={()=>setColor("blue")} className="btn" style={{backgroundColor:"Blue", color:"white"}} id="Blue">
          Blue
        </button>
        <button onClick={()=>setColor("olive")} className="btn" style={{backgroundColor:"Olive", color:"white"}} id="Olive">
          Olive
        </button>
        <button onClick={()=>setColor("gray")} className="btn" style={{backgroundColor:"gray", color:"white"}} id="Gray">
          Gray
        </button>
        <button onClick={()=>setColor("yellow")} className="btn" style={{backgroundColor:"Yellow", color:"Black"}} id="Yellow">
          Yellow
        </button>
        <button onClick={()=>setColor("pink")} className="btn" style={{backgroundColor:"Pink", color:"Black"}} id="Pink">
          Pink
        </button>
        <button onClick={()=>setColor("purple")} className="btn" style={{backgroundColor:"Purple", color:"white"}} id="Purple">
          Purple
        </button>
        <button onClick={()=>setColor("lavender")} className="btn" style={{backgroundColor:"Lavender", color:"Black"}} id="Lavender">
          Lavender
        </button>
        <button onClick={()=>setColor("white")} className="btn" style={{backgroundColor:"White", color:"Black"}} id="White">
          White
        </button>
        <button onClick={()=>setColor("black")} className="btn" style={{backgroundColor:"Black", color:"white"}} id="Black">
          Black
        </button>
        <footer>
          <div className="footer-content">
            <p>&copy; 2023 HIMANSHU SHEKHAR</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
