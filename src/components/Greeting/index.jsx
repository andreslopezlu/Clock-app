import { useState } from "react"
import stablihTimeOfTheDay from "../../utils/stablishTimeOfTheDay"

import styles from './Greeting.module.css'

const Greeting = ({timeOfTheDay}) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={styles.greetingContainer}>
            <div className={`${styles.greetingIcon} ${timeOfTheDay == 'MORNING' ? styles.morning : timeOfTheDay == 'AFTERNOON' ? styles.morning : styles.evening}`}></div>
            <p className={styles.greetingText}>{`GOOD ${timeOfTheDay}`}</p>
            {isVisible && <p className={styles.greetingText}>{`, IT’S CURRENTLY`}</p>}
        </div>
    )   
}

export default Greeting