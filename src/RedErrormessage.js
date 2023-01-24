import { ErrorMessage } from 'formik'
import React from 'react'

export default function RedErrormessage({name}) {
  return (
    <div style={{color:'red'}}>
        <ErrorMessage name={name}/>
    </div>
  )
}
