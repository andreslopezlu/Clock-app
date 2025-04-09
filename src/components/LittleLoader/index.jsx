import styles from "./LittleLoader.module.css"

const LittleLoader = () => {
    return (
        <>
            <div className={styles.loaderContainer}>
                <div className={styles.ldsEllipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )    
}

export default LittleLoader