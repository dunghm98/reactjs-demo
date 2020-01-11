import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import News from '../Components/News';
import Home from '../Components/Home';
import NewsDetail from '../Components/NewsDetail';
import Contact from '../Components/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/tin" component={News}></Route>
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail}></Route>
                <Route exact path="/lien-he" component={Contact}></Route>
                </div>
        );
    }
}

export default DieuHuongURL;