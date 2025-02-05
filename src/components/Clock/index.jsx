import { useEffect, useState, useRef } from 'react'

import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'

import useLocationApi from '../../hooks/useLocationApi'
import useQuotesApi from '../../hooks/useQuotesApi'

const Clock = () => {
    const {locationData, locationIsLoading, locationError, getLocationData} = useLocationApi()
    const {quotesData, quotesIsLoading, quotesError, getQuotesData} = useQuotesApi()
    // const [time, setTime] = useState(null)
    const timeZone = useRef("")
    const time = useRef("")

    const stablishTime = async () => {
        try {
          const currentTime = locationData?.["time_zone"]?.["current_time"] ?? ""
          const hour = currentTime?.slice(11, 16) ?? ""
        //   setTime(hour)
          time.current = hour
        } catch (error) {
          console.error(error)
        }
    }

    const stablishTimeZone = async () => {
        try {
          timeZone.current = locationData?.["time_zone"]?.["name"] ?? ""
        } catch (error) {
            console.error(error)
        }   
    }

    useEffect(() => {
        stablishTime()
        stablishTimeZone()
    }, [locationData])

    useEffect(() => {
        getLocationData()
        getQuotesData()
    }, [])

    if(locationIsLoading || quotesIsLoading) {
        console.error("Cargando");
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
            <Greeting time={time.current} />
            <Time time={time.current} />
            <Location locationData={locationData} />
            <LocationDetails locationData={locationData} timeZone={timeZone.current} />
        </>
    )
}

export default Clock