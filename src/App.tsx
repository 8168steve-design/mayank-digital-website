import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Advertising from './pages/Advertising'
import SocialGrowth from './pages/SocialGrowth'
import SEO from './pages/SEO'
import Contact from './pages/Contact'

function NotFound() {
  return <section className="page-hero section-wrap"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Lost in the <span className="gradient-text">digital space.</span></h1><p>The page you're looking for doesn't exist.</p><a href="#/" className="button button-primary">Back home</a></section>
}
export default function App() {
  return <Routes><Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/advertising" element={<Advertising/>}/>
    <Route path="/social-growth" element={<SocialGrowth/>}/>
    <Route path="/seo" element={<SEO/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Route></Routes>
}
