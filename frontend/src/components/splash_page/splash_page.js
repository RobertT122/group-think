import React from "react"
import { Link } from "react-router-dom"
import Skyline from "../svgs/skyLine.svg"
import groupThink from "../svgs/groupThinkLogo.svg"
import Eye from "../svgs/eye.svg"
import "./splash.css"

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page-container">
        <div className="header-container">
            <img className="splash-logo" src={groupThink} alt="Logo"/>
            <a className="linkedin-links" href="https://www.linkedin.com/in/robert-tetrault-28ba4b218/">Robert</a>
            <a className="linkedin-links" href="https://www.linkedin.com/in/jacky-chen6825">Jacky</a>
            <a className="linkedin-links" href="https://www.linkedin.com/in/liam-williams-76035613a/">Liam</a>
            <div className="links-container">
              <Link className="login-btn" to='/login'>Log in</Link>
              <Link className="login-btn" to="/signup">Sign up</Link>
            </div>
        </div>
        <div className="splash-eye-container">
          <img src={Eye} className="splash-eye" alt="Big Brother Eye"/>
        </div>
        <div className="splash-main-text">
          <div className="splash-header">Inspired by Orwell's 1984...</div>
          <div className="splash-body">...here's where you can belong to a worldwide community of decision-makers. Where anyone who's having trouble deciding can leverage the collective intellect of the community to optimize their everyday decisions. A place, however, where decision-making is centralized and transparent to the authorities.</div>
        </div>
        <div className="splash-skyline-container">
          <img src={Skyline} className="cityskyline-photo" alt="skyline"/>
        </div>
      </div>
    )
  }
}
export default SplashPage