import styles from './Delete.module.css'

const Delete = ({id, saveDeleteFavoritesIds, saveDeleteFavoritesData, saveDeleteFavoritesTime, toggleFavorite}) => {

    const handleDelete = async () => {
        saveDeleteFavoritesIds(id)
        toggleFavorite(id)
        saveDeleteFavoritesData()
    }

    return (
        <svg className={styles.deleteFavorite} onClick={handleDelete} width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"/>
        </svg>
    )
}

export default Delete