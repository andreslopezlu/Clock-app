import { useEffect } from 'react'

import City from '../Cities/components/City'

import useCityDetailsData from '../../hooks/useCityDetailsData'

const Favorites = ({favoritesData}) => {

    const {data, fetchData} = useCityDetailsData()

    useEffect(() => {
        fetchData(favoritesData)
    }, [favoritesData]);
    
    console.log('resultado', data)

    const renderFavorites = data.map((item) => {
        const id = item.id
        const city = item.city
        const country = item.countryCode
        return (
            <City key={id} id={id} city={city} country={country} />
        )
    }) 
    
    return (
        <ul>
            {renderFavorites}
            <li>hola</li>
        </ul>
    )
}

export default Favorites