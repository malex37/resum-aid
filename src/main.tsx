import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/styles/index.css'
import './assets/output.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactInfo from './views/ContacInfo'
import RootContext from './states/RootState'
import JobHistory from './views/JobHistory'

// TODO: Change paths to be a const value
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contactInfo",
    element:<ContactInfo />
  },
  {
    path: "/jobHistory",
    element:  <JobHistory />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootContext>
      <RouterProvider router={router} />
    </RootContext>
  </React.StrictMode>
)
