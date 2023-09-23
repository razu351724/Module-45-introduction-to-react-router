import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path: '/',
      // element: <div>Hello from routerrrr</div>
      errorElement: <ErrorPage></ErrorPage>,
      element : <Home></Home>,
      children:[
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/users",
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>
        },
        {
          path:"/user/:userId",
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          // loader: ({params}) => console.log(params),
          element: <UserDetails></UserDetails>
        },
        {
          path: '/posts',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Posts ></Posts>
        },
        {
          path: '/post/:postId',
          loader:(({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)),
          // loader: ({params}) => console.log(params),
          element: <PostDetails></PostDetails>
        }
      ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)