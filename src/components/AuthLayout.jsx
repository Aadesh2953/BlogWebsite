import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function Protected({children,authentication=true}) {
    const navigate=useNavigate()
    const [loading,setloading]=useState(true)
    useEffect(()=>{
    
       if(authentication && authStatus!==authentication)
       {
        navigate('/login')
       }else if(!authentication && authStatus!=authentication)
       {
           navigate("/")
       }
    },[authStatus,navigate,authentication])
    const authStatus=useSelector(state=>state.auth.status)
  return(
    <div>{loading && <h4>...loading</h4>}
    </div>

)
}


