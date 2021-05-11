import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
  Link
} from "react-router-dom";
function App() {
  return (

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/home">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
