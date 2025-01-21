import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredImage}) {
  const getFilePreview=()=>{return service.getFilePreview(featuredImage)}
  return (
   <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {service.getFilePreview(featuredImage)?<img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />:
                <>No Image</>}

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
   </Link>
  )
}

export default PostCard