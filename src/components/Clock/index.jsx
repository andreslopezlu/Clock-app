import { useEffect, useState } from 'react'

import Quote from './components/Quote'
import FavoritePlacesTime from './components/FavoritePlacesTime'
import Greeting from './components/Greeting'
import Time from './components/Time'
import Location from './components/Location'
import LocationDetails from './components/LocationDetails'
import Loader from '../Loader'
import Error from '../Error'

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
        console.log("Cargando")
        return <Loader /> 
    }

    if(locationError || quotesError || timeZoneError) {
        console.error("Error")
        return <Error />   
    }

    return (
        <>  
            <main className={`${styles.main} ${!isQuoteVisible && styles.increaseHeader}`}>
                <div className={styles.lightDiv}>
                    <Quote quotesData={quotesData} getQuotesData={getQuotesData} isQuoteVisible={isQuoteVisible} className={styles.quote} />
                    <FavoritePlacesTime />
                    <Greeting time={time} timeOfTheDay={timeOfTheDay} className={styles.greeting} />
                    <Time time={time} className={styles.time} />
                    <Location locationData={locationData} handleDetailsButton={handleDetailsButton} isDetailsVisible={isDetailsVisible} className={styles.location} />
                    <LocationDetails timeZoneData={timeZoneData} timeZone={timeZone} isDetailsVisible={isDetailsVisible} timeOfTheDay={timeOfTheDay} className={styles.locationDetails} />
                </div>
            </main>
        </>
    )
}

export default Clock