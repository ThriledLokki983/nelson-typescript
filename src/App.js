import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useCountries from "./custom-hooks/useCountries";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFound from "./pages/NotFound";
import "./main.css";

function App() {
  // const [countries, data] = useCountries();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/country/:name" component={CountryPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
