import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movie from './pages/movie/Movie'
import Home from './pages/Home/Home'
import Search from './pages/search/Search'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/search' element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
