 import React from 'react';
 import './profile.css'

 class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            delta: 0
        }
    }

    componentDidMount() {
        this.props.getScore(this.props.currentUser.id)
    }

    componentDidUpdate(prevProps) {
        //if its the same user and the user's score has changed, set the delta and render it on the user profile 
        if (prevProps.score.score !== this.props.score.score && prevProps.currentUser === this.props.currentUser) {
            const delta = this.props.score.score - prevProps.score.score 
            this.setState({ delta })
        }
    }

    renderDelta(delta) {
        if (delta > 0) {
            return <span className='positive-delta'>+{delta}</span>
        } else if (delta < 0) {
            return <span className='negative-delta'>{delta}</span>
        }
    }

    render() {
        const { currentUser, score } = this.props;
        return (
            <div className='user-profile-container'>
                <div className='user-image-container'>
                    <img className='user-image-profile' src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="" />
                </div>
                <div className='user-details-container'>
                    <p className='name'>{currentUser.username}</p>
                    <p className='job'>{currentUser.job}</p>
                </div>
                <div className='group-think-score-container'>
                    <p className='score'>{score.score}</p>
                </div>
            </div>
        )
    }
 }

 export default UserProfile