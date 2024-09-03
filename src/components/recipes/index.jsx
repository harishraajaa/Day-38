import React, { useEffect, useState } from 'react'
import TopBar from '../common/Topbar'
import api from '../../service/apiService'
import ApiRoutes from '../../utils/ApiRoutes'
import Feed from '../common/Feed'
import useLogout from '../../hooks/useLogout'
import { Button } from 'react-bootstrap'

function Recipes() {

  let [data,setData] = useState([])
  let logout = useLogout()
  const loadData = async()=>{
    try {
      const {path,authenticate} = ApiRoutes.GET_ALL_RECIPES
      
      let response = await api.get(path,{authenticate})
      
      setData(response.data)
      console.log(data)

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
  <div className='recipe-wrapper'>
    {

      data.map((e)=>{
        return <Feed data={e} key={e.id}/>
      })
    }
  </div>
  </>
}

export default Recipes