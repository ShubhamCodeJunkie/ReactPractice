import { Formik,Form, Field } from 'formik'
import React from 'react'
import { useState } from 'react'
import * as yup from 'yup'
import RedErrormessage from './RedErrormessage'

export default function FormikComponent() {
    const [formdata,setFormdata] = useState({})
    const Validation = yup.object({
        name:yup.string().required('Name is must'),
        age:yup.number().min(3).max(20).required('Age is must'),
        password:yup.string().required('password is must').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,"Enter strong password"),
        hobby:yup.array().min(1,'1 hobby is must').required('hobby must required'),
        country:yup.string().required('country is must'),
        comments:yup.string().max(500).required('comments is required')
    })
  return (
    <>
    <Formik 
    validationSchema={Validation}
    initialValues={{name:"",age:"",password:"",gender:"",hobby:"",country:"",comments:""}}
    onSubmit={(values)=>{
        console.log(values)
        setFormdata(values)
    }}
    >
        <Form>
            <label htmlFor="">Enter Name: </label>
            <Field type='text' name='name'></Field>
            <RedErrormessage name='name'/>
            <br /><br />
            <label htmlFor="">Enter Age: </label>
            <Field type='text' name='age'></Field>
            <RedErrormessage name='age'/>
            <br /><br />
            <label htmlFor="">Enter Password: </label>
            <Field type='password' name='password'></Field>
            <RedErrormessage name='password'/>
            <br /><br />
            <label htmlFor="">Gender: &nbsp;</label>
            <label htmlFor="">Male: &nbsp;</label>
            <Field type="radio" name="gender" value="Male"/>
            <label htmlFor="">&nbsp; Female: &nbsp;</label>
            <Field type="radio" name="gender" value="Female"/>
            <br /><br />
            <label htmlFor="">Hobbies: &nbsp;</label>
            <label htmlFor="">Reading: &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Reading"/>
            <label htmlFor="">&nbsp; Writing: &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Writing"/>
            <label htmlFor="">&nbsp; Coding: &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Coding"/>
            <label htmlFor="">&nbsp; Chilling: &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Chilling"/>
            <RedErrormessage name='hobby'/>
            <br /><br />
            <label htmlFor="">&nbsp; Select county: &nbsp;</label>
            <Field name="country" as="select">
                <option value="Canada">Canada</option>
                <option value="Usa">usa</option>
                <option value="uk">uk</option>
                <option value="London">london</option>
            </Field>
            <RedErrormessage name='country'/>
            <br /><br />
            <label htmlFor="">Comments: &nbsp;</label>
            <Field as="textarea" name="comments"></Field>
            <RedErrormessage name='comments'/>
            <br /><br />
            <button type="submit">Submit</button>
        </Form>
    </Formik>
    <h1>{JSON.stringify(formdata)}</h1>
    </>
  )
}
