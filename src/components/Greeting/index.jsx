import stablihTimeOfTheDay from "../../utils/stablishTimeOfTheDay"

const Greeting = ({time}) => {

    const timeOfTheDay = stablihTimeOfTheDay(time)

    return (
        <div className="greeting-container">
            <img src="../../assets/desktop/icon-sun.svg" alt="morning-icon" />
            <p>{`GOOD ${timeOfTheDay}, IT’S CURRENTLY`}</p>
        </div>
    )   
}

export default Greeting