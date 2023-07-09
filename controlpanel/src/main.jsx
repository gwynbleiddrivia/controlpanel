import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Main from './layout/Main'
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
	{
    		path: "/",
   	 	element: <Home></Home> ,
	}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<div className="text-black bg-[#94b3a4] max-w-7xl h-full mx-auto p-5">

      		<RouterProvider router={router} />

	</div>
  </React.StrictMode>,
)
