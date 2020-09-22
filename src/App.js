import React, { useEffect } from 'react';
import './App.css';

import FlipDown from './flipdown';
import './flipdown.css';

function App() {
  useEffect(() => {
    const untilDate = new Date("2020-09-26T00:00:00.000Z").getTime() / 1000;

    new FlipDown(untilDate)
      .start() // Start the countdown
      .ifEnded(() => { // Do something when the countdown ends
        console.log('Dragon ball is released');
      });
  });

  return (
    <div className="App">
      <div className="video-wrapper">
        <div className="video-back">
          <video id="background-video" loop autoPlay muted playsInline>
            {/* <source src="/background1.webm" type="video/webm" /> */}
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
      </div>
      <div className="logo-wrapper">
        <img src="/logo.png" />
      </div>
      <div className="counter-wrapper">
        <div id="flipdown" className="flipdown"></div>
      </div>
    </div>
  );
}

export default App;
