import React from 'react';
import './App.scss';

const sections = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

function App() {
  return (
    <div className="App">
      {/* <video id="background-video" loop autoPlay>
        <source src="https://www.youtube.com/watch?v=ixboYwEqJS8" type="video/mp4" />
          Your browser does not support the video tag.
      </video> */}
      <div className="clock">
        <div className="no no--min-tens no--sec-tens">
          {sections.map(section => <div key={`min-tens-${section}`} />)}
        </div>
        <div className="no no--min-units">
          {sections.map(section => <div key={`min-units-${section}`} />)}
        </div>
        <div className="no no--colon">
          {sections.map(section => <div key={`colon-${section}`} />)}
        </div>
        <div className="no no--sec-tens">
          {sections.map(section => <div key={`sec-tens-${section}`} />)}
        </div>
        <div className="no no--sec-units">
          {sections.map(section => <div key={`sec-tens-${section}`} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
