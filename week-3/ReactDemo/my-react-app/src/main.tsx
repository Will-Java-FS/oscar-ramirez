import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Intro from './components/intro'
// import Actor from './components/actor-info'
// import App from './App.tsx'
import './index.css'
// import MovieList from './components/movie-list'
import ContactForm from './components/contact-form'
import Counter from './components/counter'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Intro /> */}
    {/* <Actor name = {'Ryan Renolds'} age = {47} worth = {350000000} /> */}
    {/* <Actor name = {'Robert Downey Jr'} age = {59} worth = {300000000} /> */}
    {/* <MovieList /> */}
    {/* <ContactForm /> */}
    <Counter />
  </StrictMode>,
)
