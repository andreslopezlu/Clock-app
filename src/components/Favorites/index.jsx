import { useEffect, useState } from 'react'
import useCityDetailsApi from '../../hooks/useCityDetailsApi'
import styles from './Favorites.module.css'

const Favorites = ({favoritesData}) => {

    const [result, setResult] = useState([])

    const {getCityDetailData} = useCityDetailsApi()

    console.log('favoritos', favoritesData)

    useEffect(() => {
        let time = 0
        function fetchData() {
            for (const i in favoritesData){
                setTimeout(() => {
                    const item = getCityDetailData(favoritesData[i])
                    console.log(item)
                    setResult([...result, item])
                }, time);
                time += 1500
            }
        } 
        fetchData()
    }, [favoritesData]);
    
    console.log('resultado', result)

    return (
        <div>
            {result.map((city) => {
                <span key={city.id}>{city.name}</span>
            })}
        </div>
    )
}

export default Favorites