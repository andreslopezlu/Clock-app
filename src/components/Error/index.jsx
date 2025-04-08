import styles from "./Error.module.css"

const Error = () => {
    return (
        <>
            <div className={styles.errorContainer}>
                <p className={styles.error}>An error has occurred</p>
            </div>
        </>
    )   
}

export default Error