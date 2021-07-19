import React from 'react'
import './Laps.css'

const Laps = (props) => {

    return (
        <ul className="lapList">
        { props.laps.map((lap, index) => {
            return (
                <li key={ index } className="groupItem">
                    <h4>
                    <span className="min"> Minute: </span>
                    <span className="min">{lap.min < 10 ? `0${lap.min}` : lap.min}</span>
                    <span className="sec"> Second: </span>
                    <span className="sec">{lap.sec < 10 ? `0${lap.sec}` : lap.sec}</span>
                    <span className="mill"> Mill: </span>
                    <span className="mill">{lap.mill < 10 ? `0${lap.mill}` : lap.mill}</span>
                    </h4>
                    
                </li>
            )
            }) }
        </ul>
    )
}

export default Laps