import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../index.css'


function Login(){

    const[user,setUser] = useState({
        email:"",
        password:""
    })
    
    
    const handleChange = e => {
        const { name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    return (

        <Form className="form">
            {console.log(user)}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" id="login_button">
                Login
            </Button>
        </Form>
    
        
    )
}


export default Login