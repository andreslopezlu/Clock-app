
const Location = ({locationData}) => {
    return (
        <div className="location">
            <p>{locationData["country_capital"]}, {locationData["country_code2"]} {locationData["country_emoji"]}</p>
        </div>
    )
}

export default Location