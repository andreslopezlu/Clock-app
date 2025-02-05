import { useState } from "react"

const Greeting = ({time}) => {

    const stablihTimeOfTheDay = () => {
        try {
            const hour = parseInt(time.slice(0, 2))
            let result
            if ( 0 <= hour && hour < 12) {
                result = "MORNING"
            } if ( 12 <= hour && hour < 18 ) {
                result = "AFTERNOON"
            } else {
                result = "EVENING"
            }
            return result
        } catch(error){
            console.error(error)
        }
    }

    const timeOfTheDay = stablihTimeOfTheDay()

    return (
        <div className="greeting-container">
            <img src="../../assets/desktop/icon-sun.svg" alt="morning-icon" />
            <p>{`GOOD ${timeOfTheDay}, IT’S CURRENTLY`}</p>
        </div>
    )   
}

export default Greeting