import React, { useEffect, useState } from 'react'
import service from '../../appwrite/config'
import {potcard} from '../index'
function Home() {
    const [posts,setposts]=useState([]);
    useEffect(()=>
    {
      service.getPosts().then(posts){
        if(posts)
            {
                setposts(posts.document);
            }
      }
    },[])
    if(posts.length==0){
  return (
    <div>
        <container>
            <div>
                <h1>Login to read Posts</h1>
            </div>
        </container>
    </div>
  )
}
    return(
        <div className='w-full-py-8'>
    <container>
        {
            posts.map((post)=>{(
                <div key={post.$id} className='p-2 2-1/4'>
                    <potcard {...post}/>
                </div>
            )  //IF WE DONT WANT TO RETURN WE USE ()
            })
        }
        </container>
</div>)
}
}

export default Home