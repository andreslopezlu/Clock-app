import styles from './LocationDetails.module.css'

const LocationDetails = ({timeZoneData, timeZone, isDetailsVisible}) => {

    const today = new Date();
    const dayWeek = today.getDay();

    function dayOfTheYear(date) {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    }

    const dayYear = dayOfTheYear(today)

    const details = 
        <>
            <div className={`${styles.locationDetailsContainer}`}>
                <div className={styles.details}>
                    <div className={styles.detailItem}>
                        <p className={styles.detailName}>CURRENT TIMEZONE</p>
                        <p className={styles.detailValue}>{timeZone}</p>
                    </div>
                    <div className={styles.detailItem}>
                        <p className={styles.detailName}>DAY OF THE YEAR</p>
                        <p className={styles.detailValue}>{dayYear}</p>
                    </div>
                    <div className={styles.detailItem}>
                        <p className={styles.detailName}>DAY OF THE WEEK</p>
                        <p className={styles.detailValue}>{dayWeek}</p>
                    </div>
                    <div className={styles.detailItem}>
                        <p className={styles.detailName}>WEEK NUMBER</p>
                        <p className={styles.detailValue}>{timeZoneData["week"]}</p>
                    </div>
                </div>
            </div>
        </>

    return (
        <>
            {isDetailsVisible && details}
        </>
    )
}

export default LocationDetails