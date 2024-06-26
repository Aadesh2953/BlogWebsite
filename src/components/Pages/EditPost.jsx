import {React,useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Container,PostForm} from '../index'
import service from '../../appwrite/config';
function EditPost() {
const [posts,setposts]=useState(null);
const {slug}=useParams();
useEffect(()=>
{
   if(slug)
    {
        service.getpost(slug).then((post)=>
        {
            if(post)
                {
                    setposts(post)
                }
            else
            {
                navigate('/');
            }
        })
    }
},[slug,navigate])
let navigate=useNavigate()
  return posts?(<>
  <div className='py-8'>
    <Container>
        <PostForm post={posts}/>
    </Container>
  </div>
  </>):null
}

export default EditPost