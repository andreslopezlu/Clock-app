import { useEffect } from "react"

import useTimezoneApi from "../../hooks/useTimeZone"

const LocationDetails = ({timeZoneData, timeZone}) => {

    const today = new Date();
    const dayWeek = today.getDay();

    function dayOfTheYear(date) {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    }

    const dayYear = dayOfTheYear(today)

    return (
        <div className="location-details-container">
            <button>More</button>
            <img src="../../assets/desktop/icon-arrow-down.svg" alt="more-icon" />
            <div className="details">
                <div className="time-zone">
                    <p>CURRENT TIMEZONE</p>
                    <p>{timeZone}</p>
                </div>
                <div className="day-year">
                    <p>DAY OF THE YEAR</p>
                    <p>{dayYear}</p>
                </div>
                <div className="day-week">
                    <p>DAY OF THE WEEK</p>
                    <p>{dayWeek}</p>
                </div>
                <div className="week">
                    <p>WEEK NUMBER</p>
                    <p>{timeZoneData["week"]}</p>
                </div>
            </div>
        </div>
    )
}

export default LocationDetails