import "./App.css";
import Card from "./component/employee/Card";
import Main from "./component/Main";
import Nav from "./component/Nav";
import { Provider } from "react-redux";

import store from "./component/redux/store";
import CustomRoute from "./component/router/route";

import {
  BrowserRouter as Router
} from "react-router-dom";
import AddEmployee from "./component/employee/AddEmployee";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
        <Nav />
        <CustomRoute/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
