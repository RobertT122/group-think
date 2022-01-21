import React from "react"
import { Link } from "react-router-dom"
import "./splash.css"
import Skyline from "../svgs/skyLine.svg"
import Eye from "../svgs/eye.svg"
import groupThink from "../svgs/groupThinkLogo.svg"
import Answer from "../svgs/answers.png"
import { Bar } from "react-chartjs-2"

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
              <a href="https://github.com/RobertT122" target="_blank"> GitHub</a> <a href="https://www.linkedin.com/in/robert-tetrault-28ba4b218/" target="_blank">LinkedIn</a>
            </li>
            <li>
              Jack Chen
              <a href="https://github.com/jackychen6825" target="_blank"> GitHub</a> <a href="https://www.linkedin.com/in/jacky-chen6825/" target="_blank">LinkedIn</a>
            </li>
            <li>
              Liam Williams <a href="https://github.com/Williamsliam23" target="_blank"> GitHub</a> <a href="https://www.linkedin.com/in/liam-williams-76035613a/" target="_blank">LinkedIn</a>
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
        <div className='question-chart'>
                <Bar 
                    data={{
                        datasets: [{
                            label: 'Yes',
                            data: [15],
                            borderColor: 'rgba(80, 39, 245, 1)',
                            backgroundColor: 'rgba(80, 39, 245, 0.2)',
                            borderWidth: 1
                        }, {
                            label: 'No',
                            data: [8],
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderWidth: 1
                        }],
                        labels: ['']
                    }}
                    options= {{
                                scale: {
                                    ticks: {
                                        precision: 0
                                    }
                                }
                             }}
                />
            </div>
          <div className="text-holder">
          <h2>Ask your questions to the masses</h2>
          <p>Questions delivered in order of submission<br/> to the prolls for rapid responses. The Ministry<br/> would like all citizens to strive for accuracy and speed.</p>
          </div>
        </div>
        <div className="section2 flex">
        <div className="text-holder">
          <h2>Answer your fellow mans questions</h2>
          <p>Be Quick! Your answer is timed to show quick thinking.<br/>
          In your haste be sure you still keep groupThink in mind,<br/> wouldn't want to dissapoint Big Brother.</p>
        </div>
        <img src={Answer} className="section2-image"/>
        </div>
        <div className="section3 flex">
          <div className='score flex'><p>1984<br/></p><span>Ministry Approved</span></div>
          <div className="text-holder">
          <h2>Show off your devotion to groupThink</h2>
          <p>
            After answering questions the Ministry of Truth<br/>
            will assign you a score based on your speed and groupThink.<br/>
            Just remember, failure to groupThink will reflect poorly on your score.
          </p>
          </div>
        </div>
          <div className="footer">
            <h1>And remember IGNORANCE IS STRENGTH</h1>
          </div>
      </div>
    )
  }
}

export default SplashPage