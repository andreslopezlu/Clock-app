import { useNavigate } from 'react-router-dom';
import styles from './LocationDetails.module.css'

const LocationDetails = ({timeZoneData, timeZone, isDetailsVisible, timeOfTheDay}) => {

    const today = new Date();
    const dayWeek = today.getDay();

    function dayOfTheYear(date) {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    }

    
    const dayYear = dayOfTheYear(today)
    
    const navigate = useNavigate()
    const handleFavoritesClick = () => {
        navigate('/profile')
    }

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
                        <p className={`${styles.detailName} ${styles.lastValue}`}>WEEK NUMBER</p>
                        <p className={styles.detailValue}>{timeZoneData["week"]}</p>
                    </div>
                    <div className={styles.detailItem}>
                        <p onClick={handleFavoritesClick} className={`${styles.favoritesButton} ${timeOfTheDay == 'MORNING' ? styles.light : timeOfTheDay == 'AFTERNOON' ? styles.light : styles.dark}`}>Manage favorites</p>
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