import React from 'react'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'


export default function Reactbootstrap() {

    const[show,setShow] = useState(true);
    if(show)
    {
  return (
    <div>
    <Alert variant='danger' dismissible onClose={()=>{setShow(false)}}>
    <Alert.Heading>
        This is alert heading
    </Alert.Heading>
        <p>Hello world Hello world Hello world Hello world Hello world</p>
        <Alert.Link href='#'>
            Click to open this link
        </Alert.Link>
    </Alert>
    {/* <Button>submit</Button>
    <Button variant='danger'>submit</Button>
    <Button variant='dark'>submit</Button>
    <Button variant='warning'>submit</Button>
    <br /> <br />
    <Button size='md'>submit</Button>
    <Button size='lg'>submit</Button>
    <Button size='sm'>submit</Button>
    <br /> <br />
    <Button>submit</Button>
    <Button active>Submit</Button>
    <Button disabled>Submit</Button>
    <br /> <br />
    <Button href='https://kite.zerodha.com'>submit</Button> */}
    </div>
  )}
}
