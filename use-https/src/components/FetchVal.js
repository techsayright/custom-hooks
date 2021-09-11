import React from 'react'
import styles from './css/FetchVal.module.scss'
import FetchedData from './FetchedData'
import loader from '../loader/Ripple-1s-200px.gif'


export default function FetchVal({fetchApi,Err,isLoading,data}) {

    return (
        <div className={styles.FetchVal}>
            <div className={styles.btn_fetch}>
                <button onClick={fetchApi}>Fetch Data</button>
            </div>
            <div className={styles.fetched_data}>
                <h1>{Err}</h1>
                {isLoading  && <img src={loader} alt="loading.." />}
                {data.length===0 && !Err && !isLoading &&
                <div>
                    <h1>There's no Data Available</h1>
                    <h2>Kindly add Data OR click on "Fetch Data" Button</h2>
                </div>}
                {isLoading || data.map((v)=>{
                    return <FetchedData key={v.id} city={v.city} about={v.about} pincode={v.pincode} />
                })}
            </div>
        </div>
    )
}
