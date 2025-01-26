import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createBrowserRouter,Route, RouterProvider } from 'react-router-dom'
import {} from './components/index.js'
import Home from './components/Pages/Home'
import { AuthLayout, Login } from './components/index.js'
import AddPost from "./components/Pages/AddPost";
import Signup from './components/Pages/SignUpPage.jsx'
import EditPost from "./components/Pages/EditPost";

import Post from "./components/Pages/Post";


import AllPosts from "./components/Pages/AllPosts";
import YourPost from './components/Pages/YourPost.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/login",
        element:(<AuthLayout authentication={false}>
          <Login/>
        </AuthLayout>)
      }, {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
      path:"/your-posts",
      element:(<AuthLayout>
        <YourPost/>
      </AuthLayout>)
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
      
    ]
  }
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
