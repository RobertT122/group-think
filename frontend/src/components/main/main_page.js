import React from 'react';
import CountdownClock from './countdown_clock'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Group Think: Big Brother is Watching :3</h1>
        <CountdownClock initialTime={50}/>
        <footer>
          Copyright &copy; 2021 Group Think Inc.  
        </footer>
      </div>
    );
  }
}

export default MainPage;