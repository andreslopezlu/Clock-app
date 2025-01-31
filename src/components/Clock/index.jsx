import { useEffect, useRef, useState } from 'react'

import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'

import useTimezoneApi from '../../hooks/useTimeZoneApi'
import useQuotesApi from '../../hooks/useQuotesApi'
import { use } from 'react'

const Clock = () => {
    const {locationData, locationIsLoading, locationError, getLocationData} = useTimezoneApi()
    const {quotesData, quotesIsLoading, quotesError, getQuotesData} = useQuotesApi()
    const [time, setTime] = useState(null)

    const stablishTime = async () => {
        try {
            const hour = await (locationData["time_zone"]["current_time"]).slice(11, 16)
            console.log(hour);
            setTime(hour)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        stablishTime()
    }, [locationData])

    useEffect(() => {
        getLocationData()
        getQuotesData()
    }, [])

    if (locationIsLoading || quotesIsLoading) {
        console.log("Cargando...");
        return <div>Cargando...</div>
    }

    if(locationError || quotesError) {
        console.log("Error");
        return <div>Error...</div>
    }

    return (
        <>  
            <div>hola INmundo animal</div>
            <Quote quotesData={quotesData}/>
            <Greeting time={time} />
            <Time time={time} />
            <Location locationData={locationData} />
            <LocationDetails locationData={locationData} />
            <button>Consular api</button>
        </>
    )
}

export default Clock