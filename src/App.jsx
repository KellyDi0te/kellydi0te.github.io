import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations/:slug" element={<Destination />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  )
}
