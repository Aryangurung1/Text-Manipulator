import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light"); // whether the dark mode is enabled or not
  const toogleMode = () => {
    setCheck(true);
    if (mode === 'light') {
      setMode("dark");
      setTheme('light');
      setBorder("dark");
      document.body.style.backgroundColor = '#0c1b2c';
      showAlert("Your dark mode has been enabled.", "success");
    }
    else {
      setMode("light");
      setCheck(false);
      document.body.style.backgroundColor = 'white';
      showAlert("Your light mode has been enabled.", "success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [theme, setTheme] = useState("light");
  const [border, setBorder] = useState("dark");
  const [check, setCheck] = useState(false);
  const tooglePrimary = () => {
    setTheme("primary");
    setBorder("white");
    setCheck(false);
    setMode('light');
    document.body.style.backgroundColor = 'blue';
    showAlert("your selected primary theme.", "success");
  };
  const toogleSecondary = () => {
    setTheme("secondary");
    setBorder("white");
    setCheck(false);
    setMode('light')
    document.body.style.backgroundColor = 'grey';
    showAlert("your selected secondary theme.", "success");
  };
  const toogleSuccess = () => {
    setTheme('success');
    setBorder("white");
    setCheck(false);
    setMode('light')
    document.body.style.backgroundColor = 'green';
    showAlert("your selected success theme.", "success");
  };
  const toogleDanger = () => {
    setTheme('danger');
    setBorder("white");
    setCheck(false);
    setMode('light')
    document.body.style.backgroundColor = 'red';
    showAlert("your selected danger theme.", "success");
  };
  const toogleWarning = () => {
    setTheme('warning');
    setBorder("white");
    setCheck(false);
    setMode('light')
    document.body.style.backgroundColor = 'yellow';
    showAlert("your selected warning theme.", "success");
  };
  const toogleInfo = () => {
    setTheme('info');
    setBorder("white");
    setCheck(false);
    setMode('light')
    document.body.style.backgroundColor = '#0dcaf0';
    showAlert("your selected info theme.", "success");
  };
  const toogleLight = () => {
    setTheme('light');
    setBorder("dark");
    setCheck(false);
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("your selected light theme.", "success");
  };
  return (
    <>
      <Navbar hero="TextUtils" about="About" mode={mode} check={check} toogleMode={toogleMode} tooglePrimary={tooglePrimary} toogleSecondary={toogleSecondary} toogleSuccess={toogleSuccess} toogleDanger={toogleDanger} toogleWarning={toogleWarning} toogleInfo={toogleInfo} toogleLight={toogleLight} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform heading="Enter your text" mode={mode} showAlert={showAlert} theme={theme} border={border} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
