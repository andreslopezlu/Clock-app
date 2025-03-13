import { useState } from "react";

import useCityDetailsApi from "./useCityDetailsApi";

const useCityDetailsData = () => {
    const [data, setData] = useState([])
    const {getCityDetailData} = useCityDetailsApi()

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
        setData(result)
    }
    return {data, fetchData}
}

export default useCityDetailsData