import React from 'react';
import { withRouter } from 'react-router';
import './right.css';

class Right extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
        this.toggleShow = this.toggleShow.bind(this)
    }

    toggleShow() {
        const bool = !this.state.show;
        this.setState({ show: bool })
    }
    render() {  
        return (
            <div className='right-bar-container'>

                <div className='ans-questions-container'>
                    <button className='ans-questions-btn' onClick={() => this.props.history.push('/answers')}>Answer Questions</button>
                </div>
            </div>
        )
    }
}



    


export default withRouter(Right);
