import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import "icofont/dist/icofont.min.css";
import 'font-awesome/css/font-awesome.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
