import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="201881545808-3e3rcp7gp0u05sve8t76qek7emmtkbjt.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    
  </React.StrictMode>
);
