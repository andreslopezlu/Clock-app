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
          const currentTime = locationData?.["time_zone"]?.["current_time"]
          const hour = currentTime?.slice(11, 16) ?? ""
          setTime(hour)
        } catch (error) {
          console.error(error)
        }
    }

    useEffect(() => {
        stablishTime()
        console.log("cuando se actualiza")
    }, [locationData])

    useEffect(() => {
        getLocationData()
        getQuotesData()
        console.log("cuando se monta")
    }, [])

    if (locationIsLoading || quotesIsLoading) {
        console.log("Cargando...");
        return <div>Cargando...</div>
    }

    if(locationError || quotesError) {
        console.error("Error");
        return <div>Error...</div>
    }

    return (
        <>  
            <div className='saludo'>hola INmundo animal</div>
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