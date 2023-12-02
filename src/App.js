import Resume from './components/resume';
import Navbar from './components/Navbar';
import Home from './components/home'
import Block from './components/block';
import About from './components/about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const url = 'https://leyanglibackend.onrender.com/';    // backend URL
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
            <Route exact path="/LeyangLi">
               <Home/>
            </Route>
            <Route exact path="/resume">
               <Resume url = {url}/>
            </Route>
            <Route exact path="/about">
               <About/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
