import City from "../City"

const Cities = ({citiesData}) => {

    let data = citiesData?.data || []

    const result = data.map((item) => {
        const id = item.id
        const city = item.city
        const country = item.countryCode
        return (
            <City key={id} city={city} country={country}/>
        )
    }) 
    return (
        <ul>
            {result}
        </ul>
    )
}

export default Cities