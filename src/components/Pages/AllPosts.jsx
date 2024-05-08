import React, { useEffect,useState } from 'react'
import service from '../appwrite/config'
import potcard from '../index'
import container from './container/container'
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
        <container>
            {
                posts.map((post)=>{(
                    <div key={post.$id} className='p-2 2-1/4'>
                        <potcard/>
                    </div>
                )  //IF WE DONT WANT TO RETURN WE USE ()
                })
            }
            </container>
    </div>
  )
} 

export default AllPosts