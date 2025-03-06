import useFavoritesData from "../../state/useFavoritesData"
import City from "./components/City"

const Cities = ({citiesData}) => {
    
    const {favoritesData, toggleFavorites} = useFavoritesData()

    let data = citiesData?.data || []

    console.log(favoritesData)

    const result = data.map((item) => {
        const id = item.id
        const city = item.city
        const country = item.countryCode
        return (
            <City key={id} id={id} city={city} country={country} handleFavoriteButton={toggleFavorites}/>
        )
    }) 
    return (
        <ul>
            {result}
        </ul>
    )
}

export default Cities