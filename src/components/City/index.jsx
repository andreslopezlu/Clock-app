import styles from './Country.module.css'

const City = ({city, country, flag}) => {
    return (
        <li className={styles.locationText}>{`${city}, ${country}`}</li>
    )
}

export default City