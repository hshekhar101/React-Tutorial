import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [theme, setTheme] = useState("light"); // theme and setTheme are the values that are passed to the ThemeProvider component as a value prop. // if we have not defined the below setTheme function in context/theme.js, then we can use the below function to change the theme.

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(theme);
  }
  , [theme]);

  return (
    <ThemeProvider value={{theme, setTheme}}> 
      <h1 className="p-4 bg-pink-400 text-3xl">Chai</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card UI */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
