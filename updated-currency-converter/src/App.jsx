import { useEffect, useState, useCallback } from "react";
import "./App.css";
import InputBox from "./component/inputbox.jsx";

function App() {
  const [from_data, setfrom_Data] = useState({});
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [inputNumber, setInputNumber] = useState(0);
  const [convertedInputNumber, setConvertedInputNumber] = useState(0);

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

  let testing = from_data[from];
  console.log(from_data[from]);
  console.log(typeof testing);
  let keysArray = [];

  if (typeof testing === "object" && testing !== null) {
    for (let key in testing) {
      if (testing.hasOwnProperty(key)) {
        keysArray.push(key);
      }
    }
  }
  console.log(keysArray);
  const convert = () => {
    setConvertedInputNumber(inputNumber * from_data[from][to]);
  };

  return (
    <>
      <div className="app">
        <h1>Currency Convertor Application </h1>
        <div className="container">
          <InputBox
            label="From"
            amount={inputNumber}
            onAmountChange={(number) => setInputNumber(number)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={keysArray}
            selectCurrency={from}
          />
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
          <InputBox
            label="To"
            amount={convertedInputNumber}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={keysArray}
            selectCurrency={to}
            amountDisable
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              convert();
            }}
            id="btn"
          >
            Convert "{from.toUpperCase()}" to "{to.toUpperCase()}"
          </button>
        </div>
        <footer>
          <div className="footer-content">
            <p>&copy; 2023 HIMANSHU SHEKHAR</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
