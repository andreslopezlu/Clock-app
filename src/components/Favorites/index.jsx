import City from '../Cities/components/City'

import useFavorites from '../../state/useFavorites';

import { useEffect } from 'react';

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
            <City key={id} id={id} city={city} country={country} />
        )
    }) 
    
    return (
        <ul>
            {renderFavorites}
        </ul>
    )
}

export default Favorites