import { useEffect, useRef, useState } from 'react'

import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'

import useLocationApi from '../../hooks/useLocationApi'
import useQuotesApi from '../../hooks/useQuotesApi'
import useTimezoneApi from '../../hooks/useTimeZone'

import useLocationData from '../../state/useLocationData'

import stablishTime from '../../utils/stablisTime'
import stablishTimeZone from '../../utils/stablishTimeZone'
import stablihTimeOfTheDay from '../../utils/stablishTimeOfTheDay'

import styles from './Clock.module.css'

const Clock = () => {
    const {quotesData, quotesIsLoading, quotesError, getQuotesData} = useQuotesApi()
    const {locationData, locationIsLoading, locationError, getLocationData} = useLocationApi()
    const {timeZoneData, isTimeZoneLoading, timeZoneError, getTimeZoneData} = useTimezoneApi()

    // const {data, error, isLoading, time, timeOfTheDay, getData} = useLocationData()

    const [isDetailsVisible, setIsDetailsVisible] = useState(false)
    const [isQuoteVisible, setIsQuoteVisible] = useState(true)

    const time = stablishTime(locationData) 
    const timeZone = stablishTimeZone(locationData)
    const timeOfTheDay = stablihTimeOfTheDay(time)
    
    useEffect(() => {
        getQuotesData()
    }, [])
    
    useEffect(() => {
        getLocationData()
    }, [])
    
    useEffect(() => {
        getTimeZoneData(timeZone)
    }, [])

    const handleDetailsButton = () => {
        setIsDetailsVisible(!isDetailsVisible)
        setIsQuoteVisible(!isQuoteVisible)
    }

    if(locationIsLoading || quotesIsLoading || isTimeZoneLoading) {
        console.log("Cargando");
        return <div>Cargando...</div>   
    }

    if(locationError || quotesError || timeZoneError) {
        console.error("Error");
        return <div>Error...</div>
    }

    return (
        <>  
            {/* <main className={`${styles.main} ${!isQuoteVisible && styles.increaseHeader} ${timeOfTheDay == 'MORNING' ? styles.morning : timeOfTheDay == 'AFTERNOON' ? styles.morning : styles.evening}`}> */}
            <main className={`${styles.main} ${!isQuoteVisible && styles.increaseHeader}`}>
                {/* <div className={styles.darkDiv}></div> */}
                <div className={styles.lightDiv}>
                    <Quote quotesData={quotesData} getQuotesData={getQuotesData} isQuoteVisible={isQuoteVisible} className={styles.quote} />
                    <Greeting time={time} timeOfTheDay={timeOfTheDay} className={styles.greeting} />
                    <Time time={time} className={styles.time} />
                    <Location locationData={locationData} handleDetailsButton={handleDetailsButton} isDetailsVisible={isDetailsVisible} className={styles.location} />
                    <LocationDetails timeZoneData={timeZoneData} timeZone={timeZone} isDetailsVisible={isDetailsVisible} className={styles.locationDetails} />
                </div>
            </main>
        </>
    )
}

export default Clock