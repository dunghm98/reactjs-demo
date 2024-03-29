import React from 'react';
import './../css/App.css';
import Nav from './Nav'
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav></Nav>
      <DieuHuongURL></DieuHuongURL>
      <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
