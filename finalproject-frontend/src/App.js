import './App.css';
import React from "react";
import{Link, Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Home /> } />
      <Route path="/signup" render={(props) => <SignUp {...props} /> } />
      <Route path="/login" render={(props) => <Login {...props} /> } />
    </div>
  );
}

export default App;
