
const LocationDetails = () => {
    return (
        <div className="location-details-container">
            <button>More</button>
            <img src="../../assets/desktop/icon-arrow-down.svg" alt="more-icon" />
            <div className="details">
                <div className="time-zone">
                    <p>CURRENT TIMEZONE</p>
                    <p>Europe/London</p>
                </div>
                <div className="day-year">
                    <p>DAY OF THE YEAR</p>
                    <p>295</p>
                </div>
                <div className="day-week">
                    <p>DAY OF THE WEEK</p>
                    <p>5</p>
                </div>
                <div className="week">
                    <p>WEEK NUMBER</p>
                    <p>42</p>
                </div>
            </div>
        </div>
    )
}

export default LocationDetails