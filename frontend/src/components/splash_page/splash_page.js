import React from "react"
import { Link } from "react-router-dom"
import "./splash.css"

class SplashPage extends React.Component {

  render() {
    return (
      <div className="splash-page-container flex">
        <div className="splash-links flex">
          <ul>
            <li>
              groupthink logo
            </li>
            <li>
              Robert Tetrault
              git and linkedin
            </li>
            <li>
              Jack Chen
              git and linkedin
            </li>
            <li>
              Liam Williams
              git and linkedin
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="1984-photos flex">
          <img className="cityskyline-photo" alt="skyline"/>
          <img className="brother-eye" alt="Big Brother Eye"/>
          <h1>Imagine a place...</h1>
          <p>...where everyone thought the same, the absence of dissonance with thought.
          <br/>
          Where the population was truly one answering the questions you have with certainty. 
          A place to finally achieve group think!
          </p>
        </div>
        <div className="section1 flex">
          <img className="section1-image" alt="Question"/>
          <h2>Ask your questions to the masses</h2>
          <p>Questions delivered in order of submission to the prolls for rapid responses.</p>
        </div>
        <div className="section2 flex">
          <h2>Answer your fellow mans questions</h2>
          <p>Your answer is timed to create quick thinking and show if you can answer in
          the same manner as others.</p>
          <img className="section2-image" alt="Answer"/>
        </div>
        <div className="section3 flex">
          <img className="section3-image" alt="Score"/>
          <h2>Show off your devotion to groupThink</h2>
          <p>
            Earn a score based on how fast you answer and if you are in line with the majority
            of other answers.
          </p>
        </div>
      </div>
    )
  }
}

export default SplashPage