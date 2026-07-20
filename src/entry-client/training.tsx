import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Training from '../components/Training'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Training />
  </StrictMode>,
)
