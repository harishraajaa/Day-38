import React, { useEffect, useState } from 'react'
import TopBar from '../common/TopBar'
import api from '../../service/apiService'
import ApiRoutes from '../../utils/ApiRoutes'
import Table from 'react-bootstrap/Table';
import useLogout from '../../hooks/UseLogout'
import { Button } from 'react-bootstrap'

function URLs() {

  let [data,setData] = useState([])
  let logout = useLogout()
  const loadData = async()=>{
    try {
      const {path,authenticate} = ApiRoutes.GET_ALL_URLS
      let id=sessionStorage.getItem("id")
      let response = await api.get(`${path}/${id}`,{authenticate})
      setData(response.data)

    } catch (error) {
      if(error.response.status===401)
        logout()
    }
  }

  useEffect(()=>{
    loadData()
  },[])

  return <>
 <TopBar/>
 <Button onClick={()=>loadData()}>Refresh</Button>
      <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Original_Url</th>
          <th>Short_Url</th>
          <th>Hit_Count</th>
          <th>Created_By</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((e)=>{
          return <tr key={e.id}>
            <td>{e.originalUrl}</td>
            <td>{e.shortUrlId}</td>
            <td>{e.hitCount}</td>
            <td>{e.createdBy}</td>
          </tr>
        })
       }
      </tbody>
    </Table>
      </div>
  </>
}

export default URLs