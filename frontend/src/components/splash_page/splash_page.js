import React from "react"
import { Link } from "react-router-dom"
import "./splash.css"
import Skyline from "../svgs/skyLine.svg"
import groupThink from "../svgs/groupThinkLogo.svg"
import Answer from "../svgs/answers.png"
import { Bar } from "react-chartjs-2"

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page-container">
        <div className="header-container">
            <img className="splash-logo" src="https://lh3.googleusercontent.com/V_TKf5hQ-FFx93jAtR0jS140L6hNVO5-PgApJ3lwB4EVnw-QnEBrelVHf54BRWEtewMlqEJya0TO9h5YMlrTHFDlVNEXzkUCR-IrJUd1Kymgzx4UWqvqTF0fvUxUVRQcaiPPTTTASw=w2400" alt="" />
            <a href="https://www.linkedin.com/in/robert-tetrault-28ba4b218/">Robert</a>
            <a href="https://www.linkedin.com/in/jacky-chen6825">Jacky</a>
            <a href="https://www.linkedin.com/in/liam-williams-76035613a/">Liam</a>
            <Link className="login-btn" to={'/login'} >Login</Link>
        </div>

        
      </div>
    )
  }
}

export default SplashPage