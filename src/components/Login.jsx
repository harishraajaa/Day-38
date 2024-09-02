import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import api from '../service/apiService'
//import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import toast from 'react-hot-toast';
function Login() {

  const navigate = useNavigate()


  return (
    <div className='login-wrapper'>

      <h3 className='text-align-center'>Welcome to the world of recipes!</h3>

      <p className='text-align-center'>Don't have an accout? SignUp <Link to='/signup'>Here</Link></p>

      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>

      <div className='text-align-center'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Login