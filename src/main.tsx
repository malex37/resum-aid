import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/styles/index.css'
import './assets/output.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NewDocument from './views/NewDocument'
import { NewDocumentContext } from './states/NewDocumentContext'
import { DocumentType } from './types/DocumentType'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new",
    element:<NewDocument />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NewDocumentContext.Provider value={new DocumentType()}>
      <RouterProvider router={router} />
    </NewDocumentContext.Provider>
  </React.StrictMode>,
)
