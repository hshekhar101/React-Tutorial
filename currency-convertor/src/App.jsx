import { useEffect, useState, useCallback } from "react";
import "./App.css";
import InputBox from "./component/inputbox.jsx";

function App() {
  const [from_data, setfrom_Data] = useState({});
  const [to_data, setto_Data] = useState({});
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [inputNumber, setInputNumber] = useState(0);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setfrom_Data(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [from]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${to}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setto_Data(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [to]);

  const selectOptions1 = [];

  console.log(typeof from_data[from]);
  const value1 = from_data[from];
  console.log(value1);
  for (const key in value1) {
    selectOptions1.push(
      <option key={key} value={key}>
        {key}
      </option>
    );
  }

  const selectOptions2 = [];
  for (const key in to_data[to]) {
    selectOptions2.push(
      <option key={key} value={key}>
        {key}
      </option>
    );
  }

  const CoversionFunction = function () {
    document.getElementById("toNumber").value =
      inputNumber * from_data[from][to];
    console.log(inputNumber);
  };

  return (
    <>
      <div className="app">
        <h1>Currency Convertor Application </h1>
        <div className="container">
          <div className="inputbox">
            <div className="placeholder">
              <input type="text" placeholder="From" readOnly />
              <input
                className="currencyType"
                type="text"
                placeholder="Currency Type"
                readOnly
              />
            </div>
            <div className="input">
              <input
                id="fromNumber"
                type="number"
                min={0}
                onChange={(e) => {
                  e.preventDefault();
                  // console.log(e.target.value);
                  setInputNumber(e.target.value);
                }}
                defaultValue="0"
              />
              <label htmlFor="dropdown"></label>
              <select
                onChange={(e) => {
                  e.preventDefault();
                  setFrom(e.target.value);
                }}
                id="fromDropdown"
                name="dropdown"
              >
                <option key={from} value={from}>
                  {from}
                </option>
                {selectOptions1}
              </select>
            </div>
          </div>
          <div id="swap">
            <button
              onClick={() => {
                setFrom(to);
                setTo(from);
              }}
            >
              ↿⇂
            </button>
          </div>
          <div className="inputbox">
            <div className="placeholder">
              <input type="text" placeholder="To" readOnly />
              <input
                className="currencyType"
                type="text"
                placeholder="Currency Type"
                readOnly
              />
            </div>
            <div className="input">
              <input readOnly id="toNumber" type="number" />
              <label htmlFor="dropdown"></label>
              <select
                id="toDropDown"
                onChange={(e) => {
                  e.preventDefault();
                  setTo(e.target.value);
                }}
                name="dropdown"
              >
                <option key={to} value={to}>
                  {to}
                </option>
                {selectOptions2}
              </select>
            </div>
          </div>
          <button onClick={CoversionFunction} id="btn">
            Convert "{from.toUpperCase()}" to "{to.toUpperCase()}"
          </button>
        </div>
        <footer>
          <div className="footer-content">
            <p>
              &copy; 2023 HIMANSHU SHEKHAR 
            </p>
            <p>ALL RIGHTS RESERVED</p>
            
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
