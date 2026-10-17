import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight, Instagram, Menu, MessageCircle, Search, Target, TrendingUp, Users, X, Megaphone, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'

const WHATSAPP = 'https://wa.me/'
const services = [
  { icon: Megaphone, title: 'Paid Advertising', desc: 'Performance-minded campaigns across Meta, Google, Instagram and Telegram.', tag: '01' },
  { icon: Users, title: 'Social Media Growth', desc: 'Build a stronger community with a thoughtful content and engagement strategy.', tag: '02' },
  { icon: Search, title: 'Search Engine SEO', desc: 'Improve your site structure, content relevance and organic discoverability.', tag: '03' },
  { icon: BarChart3, title: 'Growth Strategy', desc: 'Connect creative, audience insights and measurement into a clear plan.', tag: '04' }
]
function RiverWorld() {
  return <div className="world" aria-hidden="true">
    <div className="world-haze haze-one" /><div className="world-haze haze-two" />
    <div className="far-island island-a"><i /><b /></div><div className="far-island island-b"><i /><b /></div>
    <div className="mountain mountain-back"><i /></div>
    <div className="island-main">
      <div className="mountain peak-left"><i /></div><div className="mountain peak-main"><i /></div><div className="mountain peak-right"><i /></div>
      <div className="forest forest-a" /><div className="forest forest-b" />
      <svg className="river-path" viewBox="0 0 700 420" preserveAspectRatio="none">
        <defs><linearGradient id="riverGlow" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#73f6ff"/><stop offset="45%" stopColor="#00aaff"/><stop offset="100%" stopColor="#6b5bff"/></linearGradient><filter id="glow"><feGaussianBlur stdDeviation="9" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <path className="river-shadow" d="M330 5 C250 65 470 75 380 135 S260 180 355 230 S490 300 420 420"/>
        <path className="river-line" d="M330 5 C250 65 470 75 380 135 S260 180 355 230 S490 300 420 420" />
        <path className="river-highlight" d="M330 5 C250 65 470 75 380 135 S260 180 355 230 S490 300 420 420" />
      </svg>
      <div className="waterfall waterfall-one" /><div className="waterfall waterfall-two" />
      <div className="island-rock" />
    </div>
    <div className="floating-rock rock-one"><i /></div><div className="floating-rock rock-two"><i /></div><div className="floating-rock rock-three"><i /></div>
    <div className="river-particles particles-one" /><div className="river-particles particles-two" />
  </div>
}
function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Home','#home'],['Advertising','#services'],['Social Growth','#services'],['SEO','#services'],['Contact','#contact']]
  return <header className="header">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-symbol">M</span><span>MAYANK <em>DIGITAL</em></span></a>
    <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'navigation navigation-open' : 'navigation'}>{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact"><MessageCircle size={16}/> Let's Talk <ArrowRight size={16}/></a></nav>
  </header>
}
function App() {
  return <div className="site">
    <div className="ambient-grid" /><Header />
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/> DIGITAL GROWTH STUDIO <span className="eyebrow-rule"/></div>
          <h1>TURN CLICKS<br/>INTO <span className="gradient-text">GROWTH.</span></h1>
          <p className="hero-description">We help ambitious brands grow with smart advertising, social media and SEO strategies that actually deliver results.</p>
          <div className="hero-buttons"><a className="btn btn-primary" href="#contact">Start a Project <ArrowRight size={18}/></a><a className="btn btn-secondary" href="#services">Explore Services <ArrowRight size={18}/></a></div>
          <div className="proof"><span className="proof-icon"><Target size={23}/></span><span><b>Strategy first.</b><small>Creative, data & consistent optimization.</small></span></div>
        </div>
        <div className="hero-art"><RiverWorld />
          <motion.div className="float-label label-visibility" animate={{y:[0,-8,0]}} transition={{duration:4,repeat:Infinity}}><TrendingUp/><span><b>More Visibility</b><small>Reach the right audience</small></span></motion.div>
          <motion.div className="float-label label-engagement" animate={{y:[0,7,0]}} transition={{duration:4.5,repeat:Infinity}}><Users/><span><b>Real Engagement</b><small>Build your community</small></span></motion.div>
          <motion.div className="float-label label-conversion" animate={{y:[0,-7,0]}} transition={{duration:5,repeat:Infinity}}><BarChart3/><span><b>Higher Conversions</b><small>Turn interest into revenue</small></span></motion.div>
        </div>
        <div className="hero-bottom"><span/> A CLEARER WAY FORWARD <span/></div>
      </section>
      <section className="platform-strip"><span>BUILT FOR THE PLATFORMS YOU USE</span><b>▲ Google Ads</b><b>∞ Meta</b><b><Instagram size={16}/> Instagram</b><b>f Facebook</b><b>➤ Telegram</b></section>
      <section className="services section" id="services">
        <div className="section-intro"><span className="eyebrow">WHAT WE DO</span><h2>One partner.<br/><span className="gradient-text">More ways to grow.</span></h2><p>From getting discovered to turning attention into action, we help bring your digital marketing into focus.</p></div>
        <div className="service-grid">{services.map(({icon:Icon,title,desc,tag},i)=><motion.article className="service-card" key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="service-top"><span className="service-icon"><Icon size={25}/></span><span>{tag}</span></div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={19}/></a><div className="card-light"/></motion.article>)}</div>
      </section>
      <section className="approach section"><div className="approach-art"><div className="approach-ring ring-one"/><div className="approach-ring ring-two"/><div className="approach-core"><Globe2 size={55}/></div><span className="approach-tag">CREATIVE + DATA</span></div><div><span className="eyebrow">A CLEARER WAY FORWARD</span><h2>Purpose behind<br/><span className="gradient-text">every pixel.</span></h2><p>Thoughtful strategy, clear communication and ongoing learning — tailored to where your business wants to go.</p><a className="text-link" href="#contact">Talk about your goals <ArrowUpRight size={17}/></a></div></section>
      <section className="contact section" id="contact"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to turn attention<br/>into <span className="gradient-text">action?</span></h2><p>Tell us what you want to build. Let's map out the next step.</p><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Let's talk on WhatsApp <ArrowUpRight size={18}/></a><small>Replace the WhatsApp link in src/App.jsx with your business number.</small></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-symbol">M</span><span>MAYANK <em>DIGITAL</em></span></a><span>© {new Date().getFullYear()} Mayank Digital. Built for growth.</span><a href="#home">Back to top ↑</a></footer>
  </div>
}
export default App