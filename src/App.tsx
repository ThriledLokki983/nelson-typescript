/** @format */

import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import React, { useState } from "react";
import { ligthTheme, darkTheme, ThemeTypes } from "../src/components/Themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import NavigationBar from "./components/NavigationBar";
import "./main.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
	const [theme, setTheme] = useState<ThemeTypes>(ligthTheme);
	const [checked, setChecked] = useState<boolean>(false);
	// const state = useSelector((state) => state);

	// console.log(state);

	const a = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.currentTarget.checked);
	};

	useEffect(() => {
		checked === true ? setTheme(darkTheme) : setTheme(ligthTheme);
	}, [checked]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<NavigationBar themeChecked={checked} checked={a} />
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/country/:countryName" component={CountryPage} />
				<Route path="/cart" component={Cart} />
				<Route component={NotFound} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
