import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../index.css'
import axios from 'axios'

function Register() {

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    })

    const handleChange = e => {
        const { name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const [name, email, password, cpassword ] = user
        axios.post("")
    }


    return (
        <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" name="name" value={user.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Re-enter Password" name="cpassword" value={user.cpassword} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" id="register_button" onClick={register}>
            Register
            </Button>
        </Form>
  );
}

export default Register;