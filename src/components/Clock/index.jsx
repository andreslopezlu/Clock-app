import { useEffect } from 'react'

import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'

import useTimezoneApi from '../../hooks/useTimeZoneApi'
import useQuotesApi from '../../hooks/useQuotesApi'

const Clock = () => {
    const {locationData, locationIsLoading, locationError, getLocationData} = useTimezoneApi()
    const {quotesData, quotesIsLoading, quotesError, getQuotesData} = useQuotesApi()

    useEffect(() => {
        getLocationData()
        getQuotesData()
    }, [])

    if(locationError || quotesError) {
        console.log("Error");
        return <div>Error...</div>
    }

    if (locationIsLoading || quotesIsLoading) {
        console.log("Cargando...");
        return <div>Cargando...</div>
    }

    return (
        <>  
            <div>hola INmundo animal</div>
            <Quote quotesData={quotesData}/>
            <Greeting />
            <Time />
            <Location />
            <LocationDetails />
            <button>Consular api</button>
        </>
    )
}

export default Clock