import React, { Component } from 'react';
import './design.css'

class Stopwatch extends Component {
    constructor() {
      super();
      this.state = {
        isRunning: false,
        elapsedTime: 0,
      };
      this.timer = null;
    }
  
    startTimer = () => {
      if (!this.state.isRunning) {
        this.setState({ isRunning: true });
        this.timer = setInterval(() => {
          this.setState({ elapsedTime: this.state.elapsedTime + 10 });
        }, 10); // Update every 10 milliseconds
      }
    };
  
    stopTimer = () => {
      if (this.state.isRunning) {
        clearInterval(this.timer);
        this.setState({ isRunning: false });
      }
    };
  
    resetTimer = () => {
      if (!this.state.isRunning) {
        this.setState({ elapsedTime: 0 });
      }
    };
  
    formatTime = (time) => {
      const ms = time % 1000;
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / (1000 * 60)) % 60);
      const hours = Math.floor(time / (1000 * 60 * 60));
  
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
    };
  

  render() {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Stopwatch - Geeksforgeeks</h1>
        <div style={{ fontSize: '2em', marginBottom: '20px' }}>
        <span>{this.formatTime(this.state.elapsedTime)}</span>
        </div>
        <div>
          <button onClick={this.startTimer} style={{ marginRight: '10px' }}>
            Start
          </button>
          <button onClick={this.stopTimer} style={{ marginRight: '10px' }}>
            Stop
          </button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
        <p>Made by React</p>
      </div>
      
    );
  }
}

export default Stopwatch;
