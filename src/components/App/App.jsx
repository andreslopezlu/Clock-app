import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import useLocationData from '../../state/useLocationData';

import styles from './App.module.css'

function App() {

  const {timeOfTheDay, getLocationData} = useLocationData()

  useEffect(() => {
    getLocationData()
  }, [])
  
  return (
    <>
      <div className={`${styles.background} ${timeOfTheDay == 'MORNING' ? styles.morning : timeOfTheDay == 'AFTERNOON' ? styles.morning : timeOfTheDay == 'EVENING' ? styles.evening : null}`}>
      <div className={styles.darkDiv}></div>
        <Outlet />
      </div>
    </>
  )
}

export default App