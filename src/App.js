import React from 'react'
import './App.css';
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Resume from './page/Resume'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Route exact path='/'> 
       <Home/>
    </Route> 
    <Route path='/project'>
      <About/>
    </Route>
    <Route path='/contact'>
      <Contact/>
    </Route>
    {/* <Route path='/resume'>
      <Resume/>
    </Route> */}
     
    </div>
  );
}

export default App;
