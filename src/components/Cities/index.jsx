import City from "./components/City"

const Cities = ({citiesData}) => {

    let data = citiesData?.data || []

    const renderCities = data.map((item) => {
        const id = item.id
        const city = item.city
        const country = item.countryCode
        return (
            <City key={id} id={id} city={city} country={country} />
        )
    }) 
    
    return (
        <ul>
            {renderCities}
        </ul>
    )
}

export default Cities