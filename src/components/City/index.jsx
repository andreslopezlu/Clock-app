import styles from './City.module.css'

const City = ({city, country}) => {
    return (
        <li className={styles.locationText}>{`${city}, ${country}`}</li>
    )
}

export default City