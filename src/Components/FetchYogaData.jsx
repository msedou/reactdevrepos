import React from 'react'
import UseFetch from './UseFetch'
const FetchYogaData=()=>{
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
        </>
    )
}


export default FetchYogaData