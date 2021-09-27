import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import React, { useState } from "react";
import { ligthTheme, darkTheme } from "../src/components/Themes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import NavigationBar from "./components/NavigationBar";
import "./main.css";
import { useEffect } from "react";

function App() {
  // const [countries, data] = useCountries();
  const [theme, setTheme] = useState(ligthTheme);
  const [checked, setChecked] = useState(false);
  const body = document.body;
  let currentTheme = localStorage.getItem("theme");

  console.log({ theme });

  const a = (e) => {
    setChecked(e.currentTarget.checked);
    console.log({ checked });
  };

  useEffect(() => {
    if (checked === true) {
      setTheme(darkTheme);
    } else {
      setTheme(ligthTheme);
    }
  }, [checked]);

  const themeToggler = () => {
    theme === ligthTheme ? setTheme(darkTheme) : setTheme(ligthTheme);
    console.log({ theme });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavigationBar
        themeHandler={themeToggler}
        themeChecked={checked}
        checked={a}
      />
      <Switch>
        <Route path="/" exact>
          <HomePage toggler={themeToggler} />
        </Route>
        <Route path="/country/:name" component={CountryPage} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
