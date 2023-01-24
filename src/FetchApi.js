import React, { useState } from 'react'
import { useEffect } from 'react';

export default function FetchApi() {

   const[result,setResult] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
       response.json().then((result)=>{
        setResult(result)
       })
    }).catch((response)=>{
        console.log(response);
    })
    })
    
  return (
    <div>
          <ul>
            {
                result.map(pst=>{
                    return(
                        <>
                            <li>{pst.id}</li>
                            <li>{pst.title}</li>
                        </>
                    )
                })
            }
          </ul>
    </div>
  )
}
