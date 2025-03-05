import { useState } from "react"

import styles from './Search.module.css'

const Search = ({onSearchCity}) => {
    const [searchedCity, setSearchedCity] = useState('')

    const handleFindCity = (e) => {
        setSearchedCity(e.target.value)
    }
    
    const handleEnterKeyDown = (e) => {
        if(e.key === 'Enter') {
            if (searchedCity.length === 0) {
                return
            } else {
                onSearchCity(searchedCity)
            }
        }
    }

    return (
        <input type="text" onKeyDown={handleEnterKeyDown} onChange={handleFindCity} value={searchedCity} placeholder='Find a city' className={styles.findCity}/>
    )
}

export default Search