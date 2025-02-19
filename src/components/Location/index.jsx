
import styles from './Location.module.css'
const Location = ({locationData, handleDetailsButton, isDetailsVisible}) => {

    return (
        <>
            <div className={styles.locationContainer}>
                <p className={styles.locationText}>{locationData["country_capital"]}, {locationData["country_code2"]} {locationData["country_emoji"]}</p>
                <div className={styles.moreDetails}>
                    <p className={styles.moreText}>{!isDetailsVisible ? 'More' : 'Less'}</p>
                    <div onClick={handleDetailsButton} className={`${styles.moreButton} ${isDetailsVisible && styles.lessButton}`}></div>
                </div>
            </div>
        </>
    )
}

export default Location