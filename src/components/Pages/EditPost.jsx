import {React,useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Container,PostForm} from '../index'
import service from '../../appwrite/config';
function EditPost() {
const [posts,setposts]=useState(null);
const {slug}=useParams();
let navigate=useNavigate()
useEffect(()=>
{
   if(slug)
    {
        service.getPost(slug).then((post)=>
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

  return posts?(<>
  <div className='py-8'>
    <Container>
        <PostForm post={posts}/>
    </Container>
  </div>
  </>):null
}

export default EditPost