import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Gauge, Link2, Search, ShieldCheck, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { whatsappLink } from '../config'
import ServiceCard from '../components/ServiceCard'
export default function SEO() {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const services = [
    { icon: ShieldCheck, title: 'Technical SEO', desc: 'Review crawlability, indexing signals, site structure and technical foundations.', tag: 'FOUNDATION' },
    { icon: FileText, title: 'On-page SEO', desc: 'Improve page titles, headings, internal links and content clarity.', tag: 'CONTENT' },
    { icon: Search, title: 'Keyword Research', desc: 'Understand search intent and identify relevant content opportunities.', tag: 'DISCOVERY' },
    { icon: Gauge, title: 'Speed & UX', desc: 'Identify opportunities to improve page performance and usability.', tag: 'PERFORMANCE' },
    { icon: Link2, title: 'Local SEO', desc: 'Strengthen local relevance and consistency for location-based searches.', tag: 'LOCAL' },
    { icon: CheckCircle2, title: 'SEO Audits', desc: 'Create a prioritized checklist of potential issues and improvements.', tag: 'AUDIT' }
  ]
  function submit(e: React.FormEvent) {
    e.preventDefault()
    const message = `Hi Mayank Digital, please contact me about an SEO review.\nWebsite: ${url}\nEmail: ${email}`
    setSent(true)
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }
  return <><section className="page-hero section-wrap"><span className="eyebrow">03 / SEARCH ENGINE OPTIMIZATION</span><h1>Get found for<br/><span className="gradient-text">what matters.</span></h1><p>Make your website easier to understand, more useful to visitors and better prepared for organic discovery.</p><a className="button button-primary" href={whatsappLink('Hi Mayank Digital, I would like to discuss SEO.')} target="_blank" rel="noreferrer">Discuss SEO <ArrowUpRight size={18}/></a></section>
    <section className="section-wrap section-block"><div className="section-heading"><div><span className="eyebrow">SEO SERVICES</span><h2>Build a stronger<br/><span className="gradient-text">search foundation.</span></h2></div><p>SEO is an ongoing process. We prioritize practical improvements based on your site, goals and audience.</p></div><div className="service-grid">{services.map((s,i)=><ServiceCard key={s.title} {...s} index={i}/>)}</div></section>
    <section className="audit-section section-wrap"><div><span className="eyebrow">START WITH YOUR WEBSITE</span><h2>Request an <span className="gradient-text">SEO review.</span></h2><p>Share your site and contact email. This form opens WhatsApp with your details so you can send the request. It does not run an automated SEO scan.</p></div><form className="contact-form" onSubmit={submit}><label>Website URL<input type="url" placeholder="https://example.com" required value={url} onChange={e=>setUrl(e.target.value)}/></label><label>Email address<input type="email" placeholder="you@example.com" required value={email} onChange={e=>setEmail(e.target.value)}/></label><button className="button button-primary" type="submit">Request review <ArrowUpRight size={18}/></button>{sent&&<p className="form-note">WhatsApp should open with your request. Send the message there to complete your enquiry.</p>}</form></section>
    <section className="cta-section"><span className="eyebrow">STEADY IMPROVEMENT OVER SHORTCUTS</span><h2>Make your website<br/><span className="gradient-text">work harder.</span></h2><p>No guaranteed rankings. Search performance depends on many factors and takes time.</p><Link to="/contact" className="button button-primary">Talk to us <ArrowUpRight size={18}/></Link></section></>
}
