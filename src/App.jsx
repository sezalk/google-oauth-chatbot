import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Chatbot from './Chatbot' // Import the Chatbot component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessLogin = (credentialResponse) => {
    
    console.log(credentialResponse);

    
    setIsLoggedIn(true);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleSuccessLogin}
        onError={handleError}
      />
      {isLoggedIn && <Chatbot />} 
    </>
  );
}

export default App;
