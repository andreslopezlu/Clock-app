import styles from './FavoritePlaceTime.module.css'

const FavoritePlaceTime = ({id, city, country, time}) => {

    return (
        <>
            <div className={styles.cityContainer}>
                <div className={styles.locationText}>{`${city}, ${country}`}</div>
                <div className={styles.favoriteTime}>{time}</div>
            </div>
        </>
    )
}

export default FavoritePlaceTime