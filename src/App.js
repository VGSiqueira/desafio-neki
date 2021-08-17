import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
