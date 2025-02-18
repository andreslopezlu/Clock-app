
import styles from './Location.module.css'
const Location = ({locationData}) => {
    return (
        <>
            <div className={styles.locationContainer}>
                <p className={styles.locationText}>{locationData["country_capital"]}, {locationData["country_code2"]} {locationData["country_emoji"]}</p>
                <div className={styles.moreDetails}>
                    <p className={styles.moreText}>More</p>
                    <div className={styles.moreButton}></div>
                </div>
            </div>
        </>
    )
}

export default Location