import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// main.ts
import 'virtual:uno.css'
import './index.css'

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
