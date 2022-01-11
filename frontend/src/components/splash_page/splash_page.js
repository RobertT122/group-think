import React from "react"
import { Link } from "react-router-dom"
import "./splash.css"
import Skyline from "../svgs/skyLine.svg"
import Eye from "../svgs/eye.svg"
import groupThink from "../svgs/groupThinkLogo.svg"

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page-container flex">
        <div className="splash-links flex">
          <ul>
            <li>
              <img className="front-logo" src={groupThink} alt="Logo"/>
            </li>
            <li>
              Robert Tetrault
              <a href="https://github.com/RobertT122"> GitHub</a> <a href="https://www.linkedin.com/in/robert-tetrault-28ba4b218/">LinkedIn</a>
            </li>
            <li>
              Jack Chen
              <a href="https://github.com/jackychen6825"> GitHub</a> <a href="https://www.linkedin.com/in/jacky-chen6825/">LinkedIn</a>
            </li>
            <li>
              Liam Williams <a href="https://github.com/Williamsliam23"> GitHub</a> <a href="https://www.linkedin.com/in/liam-williams-76035613a/">LinkedIn</a>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="front flex">
          <h1>Imagine a place...</h1>
          <p>...where everyone thought the same, the absence of dissonance with thought.
          <br/>
          Where the population was truly one answering the questions you have with certainty. 
          <br />
          A place to finally achieve group think!
          </p>
          </div>
          <img src={Eye} className="brother-eye" alt="Big Brother Eye"/>
        <div className="photos flex">
          <img src={Skyline} className="cityskyline-photo" alt="skyline"/>
        </div>
        <div className="section1 flex">
          <img className="section1-image" alt="Question"/>
          <div className="text-holder">
          <h2>Ask your questions to the masses</h2>
          <p>Questions delivered in order of submission to the prolls for rapid responses.</p>
          </div>
        </div>
        <div className="section2 flex">
        <div className="text-holder">
          <h2>Answer your fellow mans questions</h2>
          <p>Your answer is timed to create quick thinking and show if you can answer in
          the same manner as others.</p>
          </div>
          <img className="section2-image" alt="Answer"/>
        </div>
        <div className="section3 flex">
          <img className="section3-image" alt="Score"/>
          <div className="text-holder">
          <h2>Show off your devotion to groupThink</h2>
          <p>
            Earn a score based on how fast you answer and if you are in line with the majority
            of other answers.
          </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashPage