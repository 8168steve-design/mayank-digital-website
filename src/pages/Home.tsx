import { ArrowDown, ArrowUpRight, BarChart3, Bot, Globe2, Instagram, Megaphone, Search, Sparkles, Target, TrendingUp, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Orb from '../components/Orb'
import ServiceCard from '../components/ServiceCard'
import { whatsappLink } from '../config'

const services = [
  { icon: Megaphone, title: 'Paid Advertising', desc: 'Performance-minded campaigns across Meta, Google, Instagram and Telegram.', tag: '01', to: '/advertising' },
  { icon: Users, title: 'Social Media Growth', desc: 'Build a stronger community with a thoughtful content and engagement strategy.', tag: '02', to: '/social-growth' },
  { icon: Search, title: 'Search Engine SEO', desc: 'Improve your site structure, content relevance and organic discoverability.', tag: '03', to: '/seo' },
  { icon: BarChart3, title: 'Growth Strategy', desc: 'Connect creative, audience insights and measurement into a clear plan.', tag: '04', to: '/contact' }
]
export default function Home() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse-dot"/> DIGITAL GROWTH STUDIO <span className="eyebrow-line"/></div>
        <h1>Make your brand<br/>impossible to <span className="gradient-text">ignore.</span></h1>
        <p className="hero-description">Smart advertising, social media growth and SEO strategies that help ambitious businesses move forward.</p>
        <div className="hero-actions"><Link to="/contact" className="button button-primary">Start a project <ArrowUpRight size={18}/></Link><Link to="/advertising" className="button button-ghost">Explore services <ArrowDown size={16}/></Link></div>
        <div className="hero-proof"><div className="proof-icon"><Target size={17}/></div><span><b>Strategy first.</b><small>Creative, data & consistent optimization.</small></span></div>
      </div>
      <div className="hero-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orb-glow"/><Orb/><motion.div className="float-chip chip-top" animate={{ y: [0, -9, 0] }} transition={{ repeat: Infinity, duration: 4 }}><TrendingUp size={17}/><span><b>Growth mindset</b><small>Built around your goals</small></span></motion.div><motion.div className="float-chip chip-bottom" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}><Sparkles size={18}/><span><b>Creative meets data</b><small>Make every move count</small></span></motion.div><div className="hero-index">MD / 001</div></div>
      <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
    </section>
    <section className="platform-strip"><span>BUILT FOR THE PLATFORMS YOU USE</span><div><b>Google Ads</b><b>Meta</b><b><Instagram size={15}/> Instagram</b><b>Facebook</b><b>Telegram</b></div></section>
    <section className="section-wrap section-block"><div className="section-heading"><div><span className="eyebrow">WHAT WE DO</span><h2>One partner.<br/><span className="gradient-text">More ways to grow.</span></h2></div><p>From getting discovered to turning attention into action, we help bring your digital marketing into focus.</p></div><div className="service-grid">{services.map((s, i) => <ServiceCard key={s.title} {...s} index={i}/>)}</div></section>
    <section className="feature-band"><div className="feature-orb"><Globe2 size={58}/><span/></div><div><span className="eyebrow">A CLEARER WAY FORWARD</span><h2>Digital marketing with<br/><span className="gradient-text">purpose behind every pixel.</span></h2><p>Thoughtful strategy, clear communication and ongoing learning — tailored to where your business wants to go.</p><Link to="/contact" className="text-link">Talk about your goals <ArrowUpRight size={17}/></Link></div></section>
    <section className="section-wrap section-block"><div className="section-heading"><div><span className="eyebrow">HOW WE WORK</span><h2>Small steps.<br/><span className="gradient-text">Meaningful momentum.</span></h2></div></div><div className="process-grid">{[['01','Discover','Understand your offer, audience and business goals.'],['02','Plan','Build a focused plan with clear priorities.'],['03','Launch','Put campaigns and improvements into action.'],['04','Optimize','Learn from performance and refine over time.']].map(([n,t,d])=><div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="cta-section"><div className="cta-orb"/><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Ready to turn attention<br/>into <span className="gradient-text">action?</span></h2><p>Tell us what you want to build. Let's map out the next step.</p><a className="button button-primary" href={whatsappLink('Hi Mayank Digital, I would like to discuss a project.')} target="_blank" rel="noreferrer">Let's talk on WhatsApp <ArrowUpRight size={18}/></a></section>
  </>
}
