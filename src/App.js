import './App.css';
import Alert from './componemt/Alert';
// import About from './componemt/About';
import Navbar from './componemt/Navbar';
import TextForm from './componemt/TextForm';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success")
      

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }


  return (
    <>
      {/* <Router> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about" key="about" element={<About/>}>
              <About />
            </Route> */}
            {/* <Route exact path="/" key="textform" element={<TextForm />}> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

            {/* </Route> */}
          {/* </Switch> */}
        </div>


      {/* </Router> */}
    </>
  );
}

export default App;