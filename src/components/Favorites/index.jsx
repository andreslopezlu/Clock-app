import { useEffect, useState } from 'react'

import City from '../Cities/components/City'

import useCityDetailsApi from '../../hooks/useCityDetailsApi'

import styles from './Favorites.module.css'

const Favorites = ({favoritesData}) => {

    const [favorites, setFavorites] = useState([])

    const {getCityDetailData} = useCityDetailsApi()

    useEffect(() => {
        console.log('1', favorites)
        let time = 0
        let result = []
        function fetchData() {
            for (const i in favoritesData){
                setTimeout(() => {
                    const item = getCityDetailData(favoritesData[i])
                    item.then((response) => {
                        result.push(response.data)
                    })
                }, time);
                time += 1500
            }
        }
        console.log('2', favorites) 
        fetchData()
        setFavorites(result)
        console.log('3', favorites) 
    }, [favoritesData]);
    
    console.log('4', favorites)

    const renderFavorites = favorites.map((item) => {
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