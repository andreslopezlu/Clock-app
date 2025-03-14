import City from '../Cities/components/City'

const Favorites = ({favoritesData}) => {

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