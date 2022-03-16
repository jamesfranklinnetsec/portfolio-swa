import "./topbar.scss" 

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
        <a href="#intro" className="logo"><h1>Logo</h1></a>

        </div>
        <div className="button1">
          <a href="#intro" className="logo"><h2>Intro</h2></a>
        </div>
        <div className="button2">
          <a href="#projects" className="logo"><h2>Projects</h2></a>
        </div>
        <div className="button3">
          <a href="#contact" className="logo"><h2>Contact</h2></a>
        </div>
        
      </div>
      
    </div>
  )
}
