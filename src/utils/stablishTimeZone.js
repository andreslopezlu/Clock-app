const stablishTimeZone = (locationData) => {
    try {
        const timeZone = locationData?.["time_zone"]?.["name"] ?? ""
        return timeZone
    } catch (error) {
        console.error(error)
    }
}

export default stablishTimeZone