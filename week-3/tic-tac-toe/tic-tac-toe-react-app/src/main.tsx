import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import './styles/board.css'
import Game from './components/game.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Game />
  </StrictMode>,
)
