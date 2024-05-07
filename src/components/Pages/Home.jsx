
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
}
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