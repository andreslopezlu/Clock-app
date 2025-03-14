import styles from './Add.module.css'

const Add = ({id, saveDeleteFavoritesIds, saveDeleteFavoritesData, toggleFavorite}) => {

    const handleAdd = () => {
        toggleFavorite(id)
        saveDeleteFavoritesIds(id)
        saveDeleteFavoritesData()
    }

    return (
        <svg className={styles.addFavorite} onClick={handleAdd} width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#000000"/>
        </svg>
    )
}

export default Add