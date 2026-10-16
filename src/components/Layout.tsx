import { Link, NavLink, Outlet } from 'react-router-dom'
import { Instagram, Menu, MessageCircle, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { config, whatsappLink } from '../config'

export function Layout() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', '/'],
    ['Advertising', '/advertising'],
    ['Social Growth', '/social-growth'],
    ['SEO', '/seo'],
    ['Contact', '/contact']
  ]
  return <>
    <header className="topbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">M</span><span>MAYANK<span className="brand-light"> DIGITAL</span></span></Link>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <a className="nav-cta" href={whatsappLink('Hi Mayank Digital, I would like a consultation.')} target="_blank" rel="noreferrer">Let's Talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
    <main><Outlet /></main>
    <footer className="footer">
      <div><Link to="/" className="brand"><span className="brand-mark">M</span><span>MAYANK<span className="brand-light"> DIGITAL</span></span></Link><p>Digital growth, designed around your business.</p></div>
      <div className="footer-links">{links.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div>
      <div className="footer-social"><a href={whatsappLink()} aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle/></a><a href={config.instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram/></a></div>
      <small>© {new Date().getFullYear()} Mayank Digital. Built for growth.</small>
    </footer>
    <a className="float-contact whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23}/><span>Let's chat</span></a>
    <a className="float-contact instagram" href={config.instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Instagram"><Instagram size={22}/></a>
  </>
}
