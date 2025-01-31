import { useState } from "react"

const Greeting = ({time}) => {

    const stablihTimeOfTheDay = () => {
        const hour = parseInt(time.slice(0, 2))
        let result
        if ( 0 <= hour && hour <= 12) {
            result = "Morning"
        } if ( 12 < hour && hour <= 18 ) {
            result = "Afternoon"
        } else {
            result = "Evening"
        }
        console.log(result);
        return result
    }

    const timeOfTheDay = stablihTimeOfTheDay()

    return (
        <div className="greeting">
            <img src="../../assets/desktop/icon-sun.svg" alt="morning-icon" />
            <p>{`${timeOfTheDay}, IT’S CURRENTLY`}</p>
        </div>
    )   
}

export default Greeting