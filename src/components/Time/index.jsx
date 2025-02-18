import styles from './Time.module.css'

const Time = ({time}) => {

    return (
        <div className={styles.timeContainer}>
            <p className={styles.timeText}>{time}</p>
        </div>
    )
}

export default Time