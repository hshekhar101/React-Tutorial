import { useState, useEffect, useCallback } from "react";
import "./inputbox.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <>
      <div className="inputbox">
        <div className="placeholder">
          <input type="text" placeholder={label} readOnly />
          <input
            className="currencyType"
            type="text"
            placeholder="Currency Type"
            readOnly
          />
        </div>
        <div className="input">
          <input
            className="amount"
            type="number"
            min={0}
            onChange={(e) => {
              e.preventDefault();
              onAmountChange(e.target.value)}}
            value={amount}
            disabled={amountDisable}
          />
          <label htmlFor="dropdown"></label>
          <select
            onChange={(e) => {
              e.preventDefault();
              onCurrencyChange(e.target.value);
            }}
            className="fromDropdown"
            name="dropdown"
            value={selectCurrency}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
