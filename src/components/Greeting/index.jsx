import stablihTimeOfTheDay from "../../utils/stablishTimeOfTheDay"

import styles from './Greeting.module.css'

const Greeting = ({time}) => {

    const timeOfTheDay = stablihTimeOfTheDay(time)

    return (
        <div className={styles.greetingContainer}>
            <div className={styles.greetingIcon}></div>
            <p className={styles.greetingText}>{`GOOD ${timeOfTheDay}`}</p><p className="hidden">{`, IT’S CURRENTLY`}</p>
        </div>
    )   
}

export default Greeting