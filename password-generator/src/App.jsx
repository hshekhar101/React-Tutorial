import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');


  const passwordRef = useRef(null);

  // useCallback is used to prevent the function from being recreated on every render
  // useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed
  const generatePassword = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "!@#$%^&*()_+";
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]); // dependencies, callback stores the dependencies in the cache and only changes if one of the dependencies has changed


  // useEffect is used to run the function only when the dependencies change
  useEffect(() => {
    generatePassword();
  }, [length, numbers, characters, generatePassword]);

  

  const copyPasswordToClipboard =useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  , [password]);


  // we can do the same thing without using useCallback but for memoization and performance we use useCallback
  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="password-section">
          <input id="password" type="text"
          value={password}
          ref={passwordRef}
          readOnly
          maxLength={100} placeholder="Password" />
          <button id="copy"
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="manual-change">
          <input id="range" 
          onChange={(e) => setLength(e.target.value)}
          min={6} max={100} type="range" />
          <h3>Length : ({length})</h3>
          <input 
          className="checkbox"
          defaultChecked={numbers}
          onChange={() => setNumbers((prev) => !prev)} 
          type="checkbox"/>
          <span style={{ marginRight: "25px" }}>Numbers</span>

          <input className="checkbox" 
          defaultChecked={characters}
          onChange={() => setCharacters((prev) => !prev)}
          type="checkbox" />
          <span>Characters</span>
        </div>
      </div>
    </>
  );
}

export default App;

