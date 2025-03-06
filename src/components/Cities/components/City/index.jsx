import Add from '../Add'
import Delete from '../Delete'
import { useEffect, useState } from 'react'

import { FAVORITES_LOCAL_STORAGE } from "../../../../utils/constants"

import styles from './City.module.css'

const City = ({id, city, country, handleFavoriteButton}) => {

    const [isFavorite, setIsFavorite] = useState(false)

    const isCityFavorite = (id) => {
        const favorites = JSON.parse(localStorage.getItem(FAVORITES_LOCAL_STORAGE)) || []
        setIsFavorite(favorites.includes(id))
    }

    useEffect(() => {
        isCityFavorite(id)
    }, [])

    return (
        <>
            <div className={styles.cityContainer}>
                <li className={styles.locationText}>{`${city}, ${country}`}</li>
                <div className={styles.favoriteButton} onClick={() => {
                    handleFavoriteButton(id)
                    isCityFavorite(id)
                }}>
                    {isFavorite ? <Delete /> : <Add />}
                </div>
            </div>
        </>
    )
}

export default City