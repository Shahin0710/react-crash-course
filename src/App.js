import React, { Component } from 'react'
import Title from './Components/Title/Title'
import  CountDown  from './Components/CountDown/CountDown'
import Controller from './Components/Controller/Controller'
import Laps from './Components/Laps/Laps'

class App extends Component {

  constructor(props) {
    super(props) 

      this.state = {
        time: {
          min: 0,
          sec: 0,
          mill: 0
        },
        laps: []
    }
  }

  getStart() {
    this.intervalID = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mill = this.state.time.mill

        if (mill >= 10) {
          sec = sec + 1
          mill = 0
        }

        if (sec >= 60) {
          min = min + 1
          sec = 0
        }

        this.setState({
          time: {
            ...this.state,
          min,
          sec,
          mill: mill + 1 
          }
        })

    }, 100);
  }

  getPause() {
    clearInterval(this.intervalID)
  }

  getLap() {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })
    console.log(this.state.laps)
  }

  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mill: 0
      },
      laps: []
    })
  }

  render() {
  return (

          <>
          <Title />
          <CountDown time={this.state.time}/>
          <Controller 
            start={ () => this.getStart() }
            pause={ () => this.getPause() }
            reset={ () => this.getReset() }
            lap={ () => this.getLap() }
          />
          <Laps laps={ this.state.laps } />
          </>
       
    ); 
  }
}

export default App;