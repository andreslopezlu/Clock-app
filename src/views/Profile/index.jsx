import { useRef, useState } from 'react'

import ReactPaginate from 'react-paginate'

import Search from '../../components/Search'
import Cities from '../../components/Cities'
import Favorites from '../../components/Favorites'
import Loader from '../../components/Loader'

import useFavorites from '../../state/useFavorites'

import useCitiesApi from '../../hooks/useCitiesApi'

import styles from './Profile.module.css' 

const Profile = () => {
    const {isLoadingFavoritesIds, isLoadingFavoritesData, isLoadingFavoritesTime} = useFavorites()

    const {citiesData, citiesIsLoading, citiesError, getCitiesData} = useCitiesApi()
    const [currentPage, setCurrentPage] = useState(0);
    const searchValue = useRef('')
    const startValue = useRef(0)

    const totalResults = citiesData?.metadata?.totalCount || 0

    const itemsPerPage = 5

    const pageCount = Math.ceil(totalResults/itemsPerPage) || 0

    const handleSearchCity = (value) => {
        if (searchValue.current === value) {
            return  
        } else {
            searchValue.current = value
            const offset = startValue.current
            getCitiesData(searchValue.current, `${offset}`)
            setCurrentPage(0)
        }
    }

    const handlePageClick = ({selected}) => {
        const offset = selected * itemsPerPage
        getCitiesData(searchValue.current, `${offset}`)
        setCurrentPage(selected)
    }

    if(isLoadingFavoritesIds | isLoadingFavoritesData | isLoadingFavoritesTime) {
        console.log("Cargando")
        return <Loader /> 
    }

    return (
        <>
            <div className={styles.favorites}>
                <Search onSearchCity={handleSearchCity}/>
                <div className={styles.citiesList}>
                    <p className={styles.myFavorites}>Your favorites:</p>
                    <div className={styles.myFavoritesList}>
                        <Favorites />
                    </div>
                    <p className={styles.cities}>Cities:</p>
                    <div className={styles.allCitiesList}>
                        <Cities citiesData={citiesData} />
                    </div>
                </div>
                {pageCount > 0 &&
                    <ReactPaginate
                        className={styles.pagination}
                        nextClassName={styles.next}
                        previousClassName={styles.previous}
                        pageClassName={styles.page}
                        breakClassName={styles.break}
                        activeClassName={styles.active}
                        disabledClassName={styles.disabled}
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                        forcePage={currentPage}
                    />
                }
            </div>
        </>
    )
}

export default Profile