
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

 import React, { useState } from 'react'
 import Alert from './components/Alert';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showAlert= (message, type)=> {
    setalert(
      {
        msg: message,
        type: type
      }
    )
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode ('dark');
    document.body.style.backgroundColor = 'black';
     showAlert ( " dark mode has been enabled", "success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert ( " light mode has been enabled", "success");
    }
  }
  return (
    <>
<Router>
<Navbar title= "textutils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/> 
 <div className="container my-3">
 <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
            
          <Textform heading = "enter the text to analyse"/> 
           
          </Route>
        </Switch>
  
  </div>
  </Router>
    </>
  );
}

export default App;
 