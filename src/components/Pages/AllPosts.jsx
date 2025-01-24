import React, { useEffect, useState } from "react";
import service from "../../appwrite/config";
import { Postcard } from "../index";
import { Container } from "../index";
import { Spinner } from "react-bootstrap";
function AllPosts() {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
  
    setLoading(true);
    // console.log('loading',loading)
    service
      .getPosts()
      .then((posts) => {
        if (posts) {
          setposts(posts.documents);
        }
      })
      .finally(() => setLoading(false));
  }, []);
  if (!loading) {
    return (
      <div className="w-full-py-8">
        <Container>
          {posts.map((post) => {
            return (
              <div key={post.$id} className="p-2 2-1/4">
                <Postcard {...post} />
              </div>
            );
          })}
        </Container>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner animation="border" role="status" className="text-blue-500">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
}

export default AllPosts;
