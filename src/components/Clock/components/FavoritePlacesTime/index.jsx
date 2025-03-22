import { useEffect, useRef, useState } from "react"
import FavoritePlaceTime from "./components/FavoritePlaceTime"

import updateFavoritesTime from "../../../../utils/updateFavoritesTime"

import { FAVORITES_DATA_LOCAL_STORAGE } from "../../../../utils/constants"

const FavoritePlacesTime = () => {

    const [hour, setHour] = useState()

    const data = useRef(JSON.parse(localStorage.getItem(FAVORITES_DATA_LOCAL_STORAGE)) || [])

    useEffect(() => {

        let controller = new AbortController();

        const getData = async () => {
            try {
                const updatedData = await updateFavoritesTime(controller)
                setHour(updatedData)
            } catch(error) {
                console.error(error)
            }
        }
        getData()

        return () => {
            controller?.abort();
        }
    }, [])

    console.log(hour)
    console.log(data)

    const renderFavoritesTime = () => {
        let result = []
        let favsData = data.current
        for (const i in favsData) {
            const id = favsData[i].data.id
            const city = favsData[i].data.city
            const country = favsData[i].data.countryCode
            const time = hour === undefined || hour[i] === undefined ? '' : hour[i].data.slice(0, 5)
            
            const item = <FavoritePlaceTime key={id} id={id} city={city} country={country} time={time}/>
            result.push(item)
        }
        return result
    }

    return (
        <ul>
            {data === undefined ? '' : renderFavoritesTime()}
        </ul>
    )
}

export default FavoritePlacesTime