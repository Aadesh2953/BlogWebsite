import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function PostCard({ $id, title, featuredImage }) {
  // Function to get the image preview URL
  const getFilePreview = () => {
    const url = service.getFilePreview(featuredImage)
    return url
  }

  // Get the actual image URL
  const imageUrl = getFilePreview()

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
        {imageUrl ? (
            <LazyLoadImage
              src={imageUrl}  
              alt={title}     
              effect="blur"    
              className="rounded-xl"  
              width="100%"      
              height="auto"     
            />
          ) : (
            <>No Image Available</>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  )
}
export default PostCard