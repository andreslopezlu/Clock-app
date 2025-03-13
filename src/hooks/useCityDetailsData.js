import { useState } from "react";

import fetchCityDetailsApi from "../utils/fetchCityDetailsApi";

const useCityDetailsData = () => {
    const [data, setData] = useState([])
    const {getCityDetailData} = fetchCityDetailsApi()

    function fetchData(ids) {
        let time = 0
        let result = []
        
        for (const i in ids){
            setTimeout(() => {
                const item = getCityDetailData(ids[i])
                item.then((response) => {
                    result.push(response.data)
                })
            }, time);
            time += 1500
        }

        setTimeout(() => {
            setData(result)
        }, 2500)
    }
    return {data, fetchData}
}

export default useCityDetailsData