import { ErrorMessage, Formik, useFormik } from 'formik'
import React from 'react'
import { FormScheme } from './FormScheme'

   

export default function FormikForm() {
    const formInitialvalues = {
        name:'',
        email:'',
        age:'',
        password:'',
        cpassword:''
    }
    const fomfik = useFormik({
        initialValues : formInitialvalues,
        validationSchema:FormScheme,
        onSubmit: (values,action) => {
            console.log(values)
            action.resetForm();
        } 
    })
   
  return (

    <div>
        <form action="" onSubmit={fomfik.handleSubmit}>
        <label htmlFor="">Enter Name : </label>
        <input type="text" name='name' value={fomfik.values.name} onBlur={fomfik.handleBlur} onChange={fomfik.handleChange} />    
        <br /><br />
        { (fomfik.errors.name && fomfik.touched.name) ? <span style={{color:'red'}}>{fomfik.errors.name}</span> : null }
        
        <br />
        <label htmlFor="">Enter Email : </label>
        <input type="text" name='email' values={fomfik.values.email} onBlur={fomfik.handleBlur} onChange={fomfik.handleChange} />    
        <br /><br />
        { (fomfik.errors.email && fomfik.touched.email) ? <span style={{color:'red'}}>{fomfik.errors.email}</span> : null }
        <br />
        <label htmlFor="">Enter Age : </label>
        <input type="text" name='age' value={fomfik.values.age} onBlur={fomfik.handleBlur} onChange={fomfik.handleChange} />    
        <br /><br />
        { (fomfik.errors.age && fomfik.touched.age) ? <span style={{color:'red'}}>{fomfik.errors.age}</span> : null }
        
        <br />
        <label htmlFor="">Enter Password : </label>
        <input type="text" name='password' value={fomfik.values.password} onBlur={fomfik.handleBlur} onChange={fomfik.handleChange} />    
        <br /><br />
        { (fomfik.errors.password && fomfik.touched.password) ? <span style={{color:'red'}}>{fomfik.errors.password}</span> : null }
        
        <br />
        <br />
        <label htmlFor="">Confirm Password : </label>
        <input type="text" name='cpassword' value={fomfik.values.cpassword} onBlur={fomfik.handleBlur} onChange={fomfik.handleChange} />    
        <br /><br />
        { (fomfik.errors.cpassword && fomfik.touched.cpassword) ? <span style={{color:'red'}}>{fomfik.errors.cpassword}</span> : null }
        
        <br />
        <input type="submit" value="submit" />
        </form>
    </div>
  )
}
