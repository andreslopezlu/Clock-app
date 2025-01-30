import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'
import useTimezoneApi from '../../hooks/useTimeZoneApi'
import { useEffect } from 'react'

const Clock = () => {
    const {data, isLoading, error, getData} = useTimezoneApi()

    useEffect(() => {
        getData()
    }, [])

    if(error) {
        console.log("Error");
        return <div>Error...</div>
    }

    if (isLoading) {
        console.log("Cargando...");
        return <div>Cargando...</div>
    }

    return (
        <>  
            <div>hola INmundo animal</div>
            <Quote />
            <Greeting />
            <Time />
            <Location />
            <LocationDetails />
            <button>Consular api</button>
            <div>{data["country_capital"]}</div>
        </>
    )
}

export default Clock