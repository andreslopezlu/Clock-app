import Quote from '../Quote'
import Greeting from '../Greeting'
import Time from '../Time'
import Location from '../Location'
import LocationDetails from '../LocationDetails'
const axios = require('axios').default;

const Clock = () => {

    const handleClick = () => {

    }

    return (
        <>  
            <div>hola INmundo animal</div>
            <Quote />
            <Greeting />
            <Time />
            <Location />
            <LocationDetails />
            <button onClick={handleClick}>Consular api</button>
        </>
    )
}

export default Clock