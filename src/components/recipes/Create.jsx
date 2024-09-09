
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../../service/apiService'
import ApiRoutes from '../../utils/ApiRoutes'
import TopBar from '../common/TopBar'

function Create() {

  const navigate = useNavigate()

  const handleCreate = async(e)=>{
    try {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const data = {}
      for (let [key, value] of formData.entries())
        data[key] = value
      
  
      let response = await api.post(ApiRoutes.CREATE_URL.path,data,{authenticate:ApiRoutes.CREATE_URL.authenticate})
  
      toast.success(response.message)
  
      navigate('/urls')
      
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  function handleHome(){
    navigate('/urls')
  }

  return (
    <>
    <TopBar/>
    <div className='login-wrapper'>
      
      <Form onSubmit={handleCreate}>
      
        <Form.Group className="mb-3" >
          <Form.Label>Long Url</Form.Label>
          <Form.Control type="text" placeholder="Enter Original Url" name='longUrl'/>
        </Form.Group>
        
      <p>
      <div className='text-align-center'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="danger" onClick={handleHome}>
        Cancel
      </Button>
      </div>
      </p>
    </Form>
    </div>
    </>
  )
}

export default Create
