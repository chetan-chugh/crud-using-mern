import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './assets/style.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
   <GoogleOAuthProvider clientId="579578680543-d92ndrg5odur4rgf990qub56u599d9k8.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </StrictMode>
  </BrowserRouter>,
) 
