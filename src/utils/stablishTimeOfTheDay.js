const stablihTimeOfTheDay = (time) => {
    try {
        const hour = parseInt(time)
        let result
        if ( hour < 12) {
            result = "MORNING"
            return result
        } 
        
        if ( hour < 18 ) {
            result = "AFTERNOON"
            return result
        } 
        
        if ( hour <= 23) {
            result = "EVENING"
            return result
        }
    } catch(error){
        console.error(error)
    }
}

export default stablihTimeOfTheDay