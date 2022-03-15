import React from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";


function App() {
  return (
    <div className="app">
      <Topbar/>
      <Contact/>
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App;
