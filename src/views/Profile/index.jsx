import Search from '../../components/Search'
import Cities from '../../components/Cities/Cities'

import useCitiesApi from '../../hooks/useCitiesApi'

import styles from './Profile.module.css'

const Profile = () => {
    const {citiesData, citiesIsLoading, citiesError, getCitiesData} = useCitiesApi()

    const handleSearchCity = (value) => {
        getCitiesData(value)
    }

    return (
        <>
            <div className={styles.favorites}>
                <Search onSearchCity={handleSearchCity}/>
                <div className={styles.citiesList}>
                    <p className={styles.myFavorites}>Your favorites:</p>
                    <div className={styles.myFavoritesList}>
                        <ul>
                            <li className={styles.locationText}>Colombia</li>
                            <li className={styles.locationText}>US</li>
                            <li className={styles.locationText}>Argentina</li>
                        </ul>
                    </div>
                    <p className={styles.cities}>Cities:</p>
                    <div className={styles.allCitiesList}>
                        <ul>
                            <Cities citiesData={citiesData} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile