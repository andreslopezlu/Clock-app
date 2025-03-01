import { useState } from 'react'
import styles from './Profile.module.css'

const Profile = () => {
    const [searchedCountry, setSearchedCountry] = useState('')

    const handleFindCountry = (e) => {
        setSearchedCountry(e.target.value)
    }
    
    console.log(searchedCountry)

    return (
        <>
            <div className={styles.favorites}>
                <input type="text" onChange={handleFindCountry} value={searchedCountry} placeholder='Find a country' className={styles.findCountry}/>
                <div className={styles.countriesList}>
                    <p className={styles.myFavorites}>Your favorites:</p>
                    <div className={styles.myFavoritesList}>
                        <ul>
                            <li className={styles.locationText}>Colombia</li>
                            <li className={styles.locationText}>US</li>
                            <li className={styles.locationText}>Argentina</li>
                        </ul>
                    </div>
                    <p className={styles.countries}>Countries:</p>
                    <div className={styles.allCountriesList}>
                        <ul>
                            <li className={styles.locationText}>Colombia</li>
                            <li className={styles.locationText}>US</li>
                            <li className={styles.locationText}>Argentina</li>
                            <li className={styles.locationText}>Colombia</li>
                            <li className={styles.locationText}>US</li>
                            <li className={styles.locationText}>Argentina</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile