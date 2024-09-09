import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import useLogout from '../../hooks/UseLogout'

function TopBar() {
  let options = [
    {
      value:'URLs',
      path:'/urls',
      role:["admin","user"]
    },
    {
      value:'Create Short URL',
      path:'/urls/create',
      role:["admin","user"]
    },
    {
      value:'Users',
      path:'/users',
      role:["admin"]
    }
  ]

  const role = sessionStorage.getItem("role")

  const logout = useLogout()

  return <div>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className='p-10'><Link to='/urls' className='non-link'>Harish URL Shortener</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              options.filter((option)=>option.role.includes(role)).map((e)=>{
                return <Nav.Item key={e.path} className='mr-10'><Link to={e.path} className='non-link'>{e.value}</Link></Nav.Item>
              })
            }
          </Nav>
          <Button variant="danger" className='mr-10' onClick={()=>logout()}>Logout</Button>
        </Navbar.Collapse>
    </Navbar>
  </div>
}

export default TopBar