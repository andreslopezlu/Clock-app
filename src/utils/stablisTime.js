const stablishTime = (locationData) => {
    try {
      const currentTime = locationData?.["time_zone"]?.["current_time"] ?? ""
      const hour = currentTime?.slice(11, 16) ?? ""
      return hour
    } catch (error) {
      console.error(error)
    }
}

export default stablishTime