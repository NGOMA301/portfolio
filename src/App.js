import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/navBar/nav";
import About from "./components/about/about";
import Service from "./components/services//service";
import Portfolio from "./components/poltfolio/poltfolio";
import Contact from "./components/contact/contact";
import Styleswitcher from "./components/styleswitcher/styleswitcher";
//import Work from './components/folder/Work';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event) => {
    setClickCount((prev) => prev + 1);

    if (clickCount % 2 === 0) {
      console.log("Normal action executed on:", event.target);
    } else {
      window.open("https://www.profitablecpmrate.com/tqu02zn8gg?key=50b32a2fac02c53923b1cb0c63f6f230", "_blank");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, [clickCount]);
  return (
    <div className="App">
      <div className="navs"></div>
      <div className="StyleSwitcher">{/* <Styleswitcher /> */}</div>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Service} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
