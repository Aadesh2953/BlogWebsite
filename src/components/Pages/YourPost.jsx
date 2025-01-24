import {React,useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container } from "../index";
import { Spinner } from "react-bootstrap";
import  service  from '../../appwrite/config';
import { Postcard } from "../index";
export default function YourPost()
{
    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(false);
    const userId=useSelector((state)=>state.userData.$id);
    useEffect(() => {
      setLoading(true);
      // console.log('loading',loading)
      service
        .getPosts()
        .then((posts) => {
          if (posts) {
            console.log('id',posts.documents)
            let myPosts=posts.documents?.filter((post)=>post.userid==userId );
            console.log('myPosts',myPosts)
            setposts([...myPosts]);
          }
        })
        .finally(() => setLoading(false));
    }, []);
    if (!loading && posts.length>0) {
      return (
        <div className="w-full-py-8">
          <Container>
            {posts.map((post) => {
              return (
                <div key={post.$id} className="p-2 2-1/4">
                  <Postcard {...post} />
                </div>
              );
              {
                loading;
              }
              //IF WE DONT WANT TO RETURN WE USE ()
            })}
          </Container>
        </div>
      );
    }
     else if(posts && posts.length==0)
     {
        return <>
       <p>Your First Post Awaits! 🚀✨</p>
       <p>Not sure where to start? Check out what others are posting below! 👇</p>
          <NavLink to='/all-posts'>
          Explore All Posts
          </NavLink>
        </>
     }
     else {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner animation="border" role="status" className="text-blue-500">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }
}