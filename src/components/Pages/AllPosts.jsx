import React, { useEffect,useState } from 'react'
import service from '../../appwrite/config'
import {Postcard} from '../index'
import {Container} from '../index'
function AllPosts() {
   const [posts,setposts]=useState([])
   useEffect(()=>
{
   service.getPosts().then((posts)=>{
    if(posts)
        {
            setposts(posts.document);
        }
   })  
})
    return (
    <div className='w-full-py-8'>
        <Container>
            {
                posts.map((post)=>{(
                    <div key={post.$id} className='p-2 2-1/4'>
                        <Postcard/>
                    </div>
                )  //IF WE DONT WANT TO RETURN WE USE ()
                })
            }
            </Container>
    </div>
  )
} 

export default AllPosts