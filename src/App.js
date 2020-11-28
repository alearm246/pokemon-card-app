import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/module/HomePage/HomePage.js";
import PokemonCardsPage from "./components/module/PokemonCardsPage/PokemonCardsPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cards" component={PokemonCardsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
