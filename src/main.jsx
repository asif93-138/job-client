import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Job from './components/Job/Job';
import Home from './components/Layout/Home';
import Apply from './components/Apply/Apply';
import Statistics from './components/Statistics/Statistics';

import JobDetail from './components/JobDetail/JobDetail';
import PON from './components/PON/PON';
import jobLoader from './jobLoader/jobLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Job></Job>,
        loader: () => fetch('https://job-server-one.vercel.app/jobs'),
      },
      {
        path: 'details/:id',
        element: <JobDetail></JobDetail>,
        loader: ({params}) => fetch(`https://job-server-one.vercel.app/jobs/${params.id}`),
        
      },
      {
        path: 'appliedjobs',
        element: <Apply></Apply>,
        loader: () => fetch('https://job-server-one.vercel.app/jobs'),
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '*',
        element: <PON></PON>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
