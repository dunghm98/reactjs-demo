import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
        <Link className="nav-link js-scroll-trigger" to="/">React Router</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> 
            <NavLink  to="/home">Trang Chủ</NavLink>
          </li>
              <li className="nav-item"> 
            <NavLink  to="/tin">Tin Tức</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  to="/tin-chi-tiet">Tin Chi Tiết</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="oke"  to="/lien-he">Liên Hệ</NavLink>
          </li>
            </ul>
          </div>
        </div>
      </nav>
        );
    }
}

export default Nav;