import React, {useState, useEffect, Component, componentDidMount} from 'react';
import { Provider } from "./Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Hub from './pages/Hub';
import Posts from './pages/Posts';
import Map from './pages/Map';
import MissionStatement from './pages/MissionStatement';
import './style/App.scss';

export default function App() {
  return (
    <Router>
      <div className="body">
				{/* Top navigation bar */}
				<nav className="topNav">
					{/* Homepage link */}
					<div className="homeLink">
            <div className="globe">
  						<Link to="/">
                <div className="globe-img"/>
              </Link>
            </div>
					</div>
					<div className="navLinks">
            <div id="route-wrapper">
              <Link to="/Posts">Posts</Link>
            </div>
            <div id="route-wrapper">
  						<Link to="/Map">Map</Link>
            </div>
            <div id="route-wrapper">
  						<Link to="/Mission">Mission</Link>
            </div>
					</div>
          <div className="authLinks">
            <Link>Login | Register</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/Map">
            <Map />
          </Route>
          <Route path="/Mission">
            <MissionStatement />
          </Route>
          <Route path="/">
            <Hub />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
