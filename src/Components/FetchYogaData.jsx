import React from 'react'
import UseFetch from './UseFetch'
const FetchYogaData=()=>{
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return (
        <>
        {data && data.map((e)=>(
            <>
                <ul>
                    <li className='list_data_main'>
                       <h2>{e.name}</h2>
                       <p><strong>Importance :</strong>{e.importance}</p>
                       <p><strong>benefits :</strong>{e.benefits}</p>
                       <p><strong>time duration :</strong>{e.time_duration}</p>
                    </li>
                </ul>
            </>
        ))}
        </>
    )
}


export default FetchYogaData