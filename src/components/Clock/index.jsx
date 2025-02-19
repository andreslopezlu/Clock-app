import { useEffect, useRef, useState } from 'react'

import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'

import useLocationApi from '../../hooks/useLocationApi'
import useQuotesApi from '../../hooks/useQuotesApi'
import useTimezoneApi from '../../hooks/useTimeZone'

import stablishTime from '../../utils/stablisTime'
import stablishTimeZone from '../../utils/stablishTimeZone'
import stablihTimeOfTheDay from '../../utils/stablishTimeOfTheDay'

import styles from './Clock.module.css'

const Clock = () => {
    const {quotesData, quotesIsLoading, quotesError, getQuotesData} = useQuotesApi()
    const {locationData, locationIsLoading, locationError, getLocationData} = useLocationApi()
    const {timeZoneData, isTimeZoneLoading, timeZoneError, getTimeZoneData} = useTimezoneApi()

    const [isDetailsVisible, setIsDetailsVisible] = useState(false)
    const [isQuoteVisible, setIsQuoteVisible] = useState(true)

    
    const time = stablishTime(locationData) 
    const timeZone = stablishTimeZone(locationData)
    const timeOfTheDay = stablihTimeOfTheDay(time)
    
    useEffect(() => {
        let active = true
        if (active) {
            getQuotesData()
        }
        console.log("e1")
        return () => {
            active = false
        }
    }, [])
    
    useEffect(() => {
        let active = true
        if (active) {
            getLocationData()
        }
        console.log("e2")
        return () => {
            active = false
        }
    }, [])
    
    useEffect(() => {
        let active = true
        if (active) {
            getTimeZoneData(timeZone)
        }
        console.log("e3")
        return () => {
            active = false
        }
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
            <main className={`${styles.main} ${!isQuoteVisible && styles.increaseHeader} ${timeOfTheDay == 'MORNING' ? styles.morning : styles.evening}`}>
                <div className={styles.darkDiv}></div>
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