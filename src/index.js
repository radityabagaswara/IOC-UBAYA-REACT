import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import TopNav from "./pages/nav/top-navbar/TopNav";
import Footer from "./pages/nav/footer/Footer";
import Homepage from "./pages/homepage/Homepage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopNav />
      <App />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
