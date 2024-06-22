import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogPage from './pages/BlogPage/BlogPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import PortfolioSection from './pages/PortfolioSection.jsx'
import Careers from './pages/Careers.jsx'
import AboutUs from './pages/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
