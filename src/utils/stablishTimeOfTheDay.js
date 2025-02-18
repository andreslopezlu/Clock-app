const stablihTimeOfTheDay = (time) => {
    try {
        const hour = parseInt(time)
        let result
        if ( 0 <= hour && hour < 12) {
            result = "MORNING"
        } if ( 12 <= hour && hour < 18 ) {
            result = "AFTERNOON"
        } else {
            result = "EVENING"
        }
        return result
    } catch(error){
        console.error(error)
    }
}

export default stablihTimeOfTheDay