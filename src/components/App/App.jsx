import { Outlet } from 'react-router-dom';

import useLocationData from '../../state/useLocationData';
import { useEffect } from 'react';

import styles from './App.module.css'

function App() {

  const {timeOfTheDay, getData} = useLocationData()

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <div className={`${styles.background} ${timeOfTheDay == 'MORNING' ? styles.morning : timeOfTheDay == 'AFTERNOON' ? styles.morning : styles.evening}`}>
      <div className={styles.darkDiv}></div>
        <Outlet />
      </div>
    </>
  )
}

export default App
