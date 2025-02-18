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

import styles from './Clock.module.css'

const Clock = () => {
    const {quotesData, quotesIsLoading, quotesError, getQuotesData} = useQuotesApi()
    const {locationData, locationIsLoading, locationError, getLocationData} = useLocationApi()
    const {timeZoneData, isTimeZoneLoading, timeZoneError, getTimeZoneData} = useTimezoneApi()
    
    const time = stablishTime(locationData) 
    const timeZone = stablishTimeZone(locationData)
    
    useEffect(() => {
        let active = true
        if (active) {
            getQuotesData()
        }
        return () => {
            active = false
        }
    }, [])

    useEffect(() => {
        let active = true
        if (active) {
            getLocationData()
        }
        return () => {
            active = false
        }
    }, [])

    useEffect(() => {
        let active = true
        if (active) {
            getTimeZoneData(timeZone)
        }
        return () => {
            active = false
        }
    }, [])

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
            <main className={styles.main}>
                <div className={styles.darkDiv}></div>
                <div className={styles.lightDiv}>
                    <Quote quotesData={quotesData} getQuotesData={getQuotesData} className={styles.quote} />
                    <Greeting time={time} className={styles.greeting} />
                    <Time time={time} className={styles.time} />
                    <Location locationData={locationData} className={styles.location} />
                    <LocationDetails timeZoneData={timeZoneData} timeZone={timeZone} className={styles.locationDetails} />
                </div>
            </main>
        </>
    )
}

export default Clock