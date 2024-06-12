import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Navbar from './components/navBar/nav'
import About from './components/about/about'
import Service from './components/services//service'
import Portfolio from './components/poltfolio/poltfolio'
import Contact from './components/contact/contact'
import Styleswitcher from './components/styleswitcher/styleswitcher'
//import Work from './components/folder/Work';



function App() {
  return (
    <div className="App">
      <div className='navs'>
      </div>
      <div className='StyleSwitcher'>
        {/* <Styleswitcher /> */}
      </div>

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
