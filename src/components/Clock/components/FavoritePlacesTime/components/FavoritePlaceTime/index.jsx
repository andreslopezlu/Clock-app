import styles from './FavoritePlaceTime.module.css'

const FavoritePlaceTime = ({id, city, country, time}) => {

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`} <span className={styles.favoriteTime}>{time}</span></li>
            </div>
        </>
    )
}

export default FavoritePlaceTime