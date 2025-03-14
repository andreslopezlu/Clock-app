import { useEffect } from 'react';

import Favorite from './components/Favorite';

import useFavorites from '../../state/useFavorites';

import { FAVORITES_LIMIT } from '../../utils/constants';

import styles from './Favorites.module.css'

const Favorites = () => {

    const {favoritesIds, totalFavorites, favoritesData, saveDeleteFavoritesIds, saveDeleteFavoritesData, getFavoritesData} = useFavorites()

    useEffect(() => {
        getFavoritesData()
    }, [])

    console.log('resultado', favoritesData)

    const renderFavorites = favoritesData.map((item) => {
        const id = item.data.id
        const city = item.data.city
        const country = item.data.countryCode
        return (
            <Favorite key={id} id={id} city={city} country={country} favoritesIds={favoritesIds} saveDeleteFavoritesIds={saveDeleteFavoritesIds} saveDeleteFavoritesData={saveDeleteFavoritesData}/>
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