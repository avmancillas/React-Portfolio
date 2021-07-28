import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Work from './components/Work';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe'
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path = "/" exact component= {Home}/>
          <Route path = "/AboutMe" component= {AboutMe}/>
          <Route path = "/Languages" component= {Languages}/>
          <Route path = "/Work" component= {Work}/>
          <Route path = "/Resume" component= {Resume}/>
          <Route path = "/ContactMe" component= {ContactMe}/>
        </Switch>
        

      </div>
    </Router>
  );
}




export default App;
