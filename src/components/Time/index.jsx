
const Time = ({locationData}) => {

    const time = locationData["time_zone"]["current_time"].slice(11, 16)

    return (
        <div className="location">
            <p>{time}</p>
        </div>
    )
}

export default Time