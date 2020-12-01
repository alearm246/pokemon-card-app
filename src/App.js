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
import CreatePage from "./components/module/CreatePage/CreatePage.js";
import SignUpPage from "./components/module/SignUpPage/SignUpPage.js";
import LogInPage from "./components/module/LogInPage/LogInPage.js";
import {UserInfoProvider} from "./useContext/UserInfoProvider.js";

function App() {
  return (
    <UserInfoProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cards" component={PokemonCardsPage} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LogInPage} />
          </Switch>
        </div>
      </Router>
    </UserInfoProvider>
  );
}

export default App;
