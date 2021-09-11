import React from 'react'
import styles from './css/FetchedData.module.scss'

export default function FetchedData({city , about ,pincode}) {
    return (
        <div className={styles.FetchedData}>
            <h1>City: <small>{city}</small></h1>
            <h2>About: <small>{about}</small></h2>
            <h3>Pin-Code: {pincode}</h3>
        </div>
    )
}

