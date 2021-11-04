import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddService from "./components/AddService/AddService";
import Details from "./components/Details/Details";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route exact path="/home">
    <Home></Home>
    </Route>
    <Route exact path="/services">
    <Home></Home>
    </Route>
    <Route exact path="/about">
    <Home></Home>
    </Route>
    <Route exact path="/mechanics">
    <Home></Home>
    </Route>
    <Route exact path="/addService">
    <AddService></AddService>
    </Route>
    <Route exact path="/service/:serviceId">
    <Details></Details>
    </Route>
    <Route exact path="/login">
    <Login/>
    </Route>
    <Route exact path="*">
    <Notfound/>
    </Route>
    </Switch>
      
    </BrowserRouter>
  );
}

export default App;
