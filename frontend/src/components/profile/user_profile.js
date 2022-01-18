 import React from 'react';
 import './profile.css'

 class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }

        this.toggleShow = this.toggleShow.bind(this);
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

    toggleShow() {
        const bool = !this.state.show;
        this.setState({ show: bool })
    }

    render() {
        const { currentUser, score, openModal } = this.props;
        return (
            <div className='user-profile-container'>
                <div className={!this.state.show ? 'hide' : 'show-score-exp'} >
                    The GroupThink score (-1984, 1984) represents how a user has answered in comparison to others. A high score means a user thinks like others and vice-versa. 
                </div>
                <div className='tutorial-container'>
                    <button onClick={() => openModal('tutorial')} className='tutorial-btn'> Tour </button>
                </div>
                <div className='user-image-container'>
                    <img className='user-image-profile' src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="" />
                </div>
                <div className='user-details-container'>
                    <p className='name'>{currentUser.username}</p>
                    <p className='job'>{currentUser.job}</p>
                </div>
                <div className='group-think-score-container'>
                    <div onMouseLeave={this.toggleShow} onMouseEnter={this.toggleShow} className='question-mark-container'><i className="fas fa-question"></i></div>
                    <p className={score.score > 0 ? 'pos-score' : 'neg-score' }>{score.score}</p>
                </div>
            </div>
        )
    }
 }

 export default UserProfile