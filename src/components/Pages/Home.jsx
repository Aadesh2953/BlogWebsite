import React, { useEffect, useState } from "react";
import service from "../../appwrite/config.js";
import { Container } from "../index.js";
import { useSelector } from "react-redux";
import PostCard from "../Postcard.jsx";
import Spinner from 'react-bootstrap/Spinner'
function Home() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    setLoading(true);
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  const isLoggedIn =  useSelector((state) => state.status);
  if(loading)
  {
    return(
     <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <Spinner
          animation="border"
          role="status"
          className="w-16 h-16 text-blue-500"
        >
        </Spinner>
      </div>
    )
  }
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-500">
            Login to read posts
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-100">
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="hover:scale-105 transition-transform">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
