import React from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import { useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import TopNav from "./pages/nav/top-navbar/TopNav";
import Footer from "./pages/nav/footer/Footer";
import Homepage from "./pages/homepage/Homepage";

function App() {
  function usePageViews() {
    React.useEffect(() => {
      scroll($(document).scrollTop());
      $(window).scroll(function () {
        scroll($(document).scrollTop());
      });
    });
  }

  const scroll = (value) => {
    var windowsize = $(window).width();

    if (window.location.pathname === "/" && windowsize > 768) {
      if (value > 150) {
        $(".navtop").removeClass("transparent");
        $(".navlist p").removeClass("transparent");
        $(".logo").removeClass("transparent");
      } else {
        $(".navtop").addClass("transparent");
        $(".navlist p").addClass("transparent");
        $(".logo").addClass("transparent");
      }
    } else {
      $(".navtop").removeClass("transparent");
      $(".navlist p").removeClass("transparent");
      $(".logo").removeClass("transparent");
    }
  };
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Switch>
          <Route path={"/"} component={Homepage} />
        </Switch>
        <Footer />
      </Router>
      {usePageViews()}
    </div>
  );
}

export default App;
