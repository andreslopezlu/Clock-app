import { useEffect, useState } from 'react'

import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'

import useLocationData from '../../state/useLocationData'

import useQuotesApi from '../../hooks/useQuotesApi'
import useTimezoneApi from '../../hooks/useTimeZone'

import stablishTimeZone from '../../utils/stablishTimeZone'

import styles from './Clock.module.css'

const Clock = () => {
    const {locationData, locationError, isLocationLoading, time, timeOfTheDay, getLocationData} = useLocationData()

    const {quotesData, IsQuotesLoading, quotesError, getQuotesData} = useQuotesApi()
    const {timeZoneData, isTimeZoneLoading, timeZoneError, getTimeZoneData} = useTimezoneApi()

    const [isDetailsVisible, setIsDetailsVisible] = useState(false)
    const [isQuoteVisible, setIsQuoteVisible] = useState(true)

    const timeZone = stablishTimeZone(locationData)
    
    useEffect(() => {
        getLocationData()
    }, [])

    useEffect(() => {
        getQuotesData()
    }, [])
    
    useEffect(() => {
        getTimeZoneData(timeZone)
    }, [])

    const handleDetailsButton = () => {
        setIsDetailsVisible(!isDetailsVisible)
        setIsQuoteVisible(!isQuoteVisible)
    }

    if(isLocationLoading || IsQuotesLoading || isTimeZoneLoading) {
        console.log("Cargando");
        return (
            <>
                <div className={styles.loaderContainer}>
                    <div className={styles.loader}></div>
                </div>
            </>
        )     
    }

    if(locationError || quotesError || timeZoneError) {
        console.error("Error");
        return (
            <>
                <div className={styles.errorContainer}>
                    <p className={styles.error}>An error has occurred</p>
                </div>
            </>
        )   
    }

    return (
        <>  
            <main className={`${styles.main} ${!isQuoteVisible && styles.increaseHeader}`}>
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