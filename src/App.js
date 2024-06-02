import Resume from './components/resume';
import Navbar from './components/Navbar';
import Home from './components/home'
import Block from './components/block';
import About from './components/about';
import Arts from './components/arts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Block />
        <div className="content">
          <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route exact path="/resume">
               <Resume/>
            </Route>
            <Route exact path="/about">
               <About/>
            </Route>
            <Route exact path="/arts">
               <Arts/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
