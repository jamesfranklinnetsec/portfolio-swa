import React from 'react';
/**
import './App.css';
*/
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
