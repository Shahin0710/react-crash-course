import React, { Component } from 'react'
import './Title.css'
import { FaPen } from "react-icons/fa";

export default class Title extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "This is a Dummy Title",
            isInput: false
        }
    }

    editHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    keyPressHandler(event) {
          if (event.key === "Enter") {
              this.setState({
            ...this.state,
            isInput: false
          })  
        }
    }

    render() {

      let output = null

        if (this.state.isInput) {
            output = (
                <div className="inputTitle" >
                <input
                 className="type"
                 type="text" 
                 value={ this.state.title }
                 onChange={ (event) => this.inputChange(event) }
                 onKeyPress={ (event) => this.keyPressHandler(event) }
                />
                </div>
            )

        } else {
            output = (
            <div className="title">
                <h1> {this.state.title} </h1>
                <span onClick={ () => this.editHandler() } className="logo">
                    <FaPen />                    
                </span>
            </div>
            )
        }

        return (
            <div className="title">
                {output}
            </div>
        )
    }
}
