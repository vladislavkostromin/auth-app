import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/register' component={RegisterPage}/>
    </Switch>
  );
}

export default App;
