import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Lionel Messi',
      bio: "Football legend, record-breaker, GOAT. Messi: Master of the pitch.",
      imgSrc: 'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-06/Messi_Miami_FTR_2.png?h=8bbf2749&itok=hFu-Cobm',
      profession: 'Actor',
    },
    show: false,
    intervalId: null,
    timeSinceMount: 0,
  };

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1 className='person'>PERSON PROFILE</h1>
        <button onClick={this.toggleProfile}>{show ? 'Hide Profile' : 'Show Profile'}</button>
        {show && (
          <div className="profile">
            <img style={{width : '35rem'}} src={imgSrc} alt="Profile" />
            <h2 className='name'>{fullName}</h2>
            <p className='bio'>{bio}</p>
            <span>PROFESSION: {profession}</span>
          </div>
        )}
        <p className='tsm'>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;