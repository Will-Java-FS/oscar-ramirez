import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Blogs from './pages/blogs'
import ContactUs from './pages/contact-us'

import './index.css'
// import Intro from './components/intro'
// import Actor from './components/actor-info'
// import App from './App.tsx'
// import MovieList from './components/movie-list'
// import ActorList from './components/actor-list'
// import ContactForm from './components/contact-form'
// import Counter from './components/counter'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
    {/* <Intro />
    <Actor name = {'Ryan Renolds'} age = {47} worth = {350000000} />
    <Actor name = {'Robert Downey Jr'} age = {59} worth = {300000000} />
    <MovieList />
    <ContactForm />
    <Counter />
    <ActorList /> */}
  </StrictMode>,
)
