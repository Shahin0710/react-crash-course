import React, { Component } from 'react'
import './Controller.css'

export default class Controller extends Component {
    
    constructor(props) {
        super(props) 

        this.state = {
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }

    startHandler() {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true,
        })
        this.props.start()
    }

    pauseHandler() {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true
        })
        this.props.pause()
    }

    lapHandler() {
       this.props.lap()
    }

    resetHandler() {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }

    getController() {
        let output = null
        
        if (this.state.start && !this.state.reset){
            output = (
            <div className="button">
            <button 
                className="startbtn"
                onClick={event => this.startHandler()}
            >
                Start
            </button>
            </div>
            )
        }
        else if (this.state.pause && this.state.lap){
            output = (
                <div className="button">
                <button 
                    className="pausebtn"
                    onClick={event => this.pauseHandler()}
                >
                    Pause
                </button>
                <button 
                    className="lapbtn"
                    onClick={event => this.lapHandler()}
                >
                    Lap
                </button>
                </div>
                )
        }
        else if (this.state.start && this.state.reset){
            output = (
                <div className="button">
                <button 
                    className="startbtn"
                    onClick={event => this.startHandler()}
                >
                    Start
                </button>
                <button 
                    className="resetbtn"
                    onClick={event => this.resetHandler()}
                >
                    Reset
                </button>
                </div>
                )
        }

        return output
    }
    
    render() {
        return this.getController()
    }
}
