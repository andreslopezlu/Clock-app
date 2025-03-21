import { useEffect } from 'react';

import Favorite from './components/Favorite';

import useFavorites from '../../state/useFavorites';

import { FAVORITES_LIMIT } from '../../utils/constants';

import styles from './Favorites.module.css'

const Favorites = () => {

    const {favoritesIds, totalFavorites, favoritesData, favoritesTime, saveDeleteFavoritesIds, saveDeleteFavoritesData, saveDeleteFavoritesTime, getFavoritesData, getFavoritesTime} = useFavorites()

    useEffect(() => {
        getFavoritesData()
    }, [])

    const renderFavorites = favoritesData.map((item) => {
        const id = item.data.id
        const city = item.data.city
        const country = item.data.countryCode
        return (
            <Favorite key={id} id={id} city={city} country={country} />
        )
    }) 
    
    return (
        <>
            <p className={styles.totalFavorites}>{`You have ${totalFavorites} of ${FAVORITES_LIMIT} favorites`}</p>
            <ul>
                {renderFavorites}
            </ul>
        </>
    )
}

export default Favorites