import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CounterProvider from './useContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CounterProvider>
    <App />
  </CounterProvider>,
)