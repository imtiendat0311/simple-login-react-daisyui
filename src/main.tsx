import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.tsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='flex justify-center items-center h-screen'>
    <Login />
    </div>
  
  </React.StrictMode>,
)
