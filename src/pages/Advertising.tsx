import { ArrowUpRight, BarChart3, Facebook, Instagram, MessageCircle, Search, Target, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { whatsappLink } from '../config'
export default function Advertising() {
  const services = [
    { icon: Target, title: 'Meta Ads', desc: 'Campaign planning and audience testing across Facebook and Instagram placements.', tag: 'SOCIAL ADS' },
    { icon: Search, title: 'Google Search Ads', desc: 'Reach people actively searching for products or services like yours.', tag: 'SEARCH' },
    { icon: BarChart3, title: 'Google Display Ads', desc: 'Build awareness with creative display campaigns across relevant placements.', tag: 'AWARENESS' },
    { icon: Youtube, title: 'YouTube Ads', desc: 'Use video creative to introduce your brand and support campaign goals.', tag: 'VIDEO' },
    { icon: Instagram, title: 'Instagram Ads', desc: 'Visual-first campaigns designed around your offer, audience and creative.', tag: 'SOCIAL' },
    { icon: MessageCircle, title: 'Telegram Promotion', desc: 'Plan transparent, relevant promotions in suitable Telegram communities.', tag: 'COMMUNITY' }
  ]
  return <><section className="page-hero section-wrap"><span className="eyebrow">01 / PAID ADVERTISING</span><h1>Attention is valuable.<br/><span className="gradient-text">Use it wisely.</span></h1><p>Campaigns built around your audience, business goals and a process of continuous learning.</p><a className="button button-primary" href={whatsappLink('Hi Mayank Digital, I want to discuss advertising services.')} target="_blank" rel="noreferrer">Discuss a campaign <ArrowUpRight size={18}/></a></section>
    <section className="section-wrap section-block"><div className="section-heading"><div><span className="eyebrow">OUR AD SERVICES</span><h2>Find your next<br/><span className="gradient-text">growth channel.</span></h2></div><p>Choose the channels that fit your customers and offer. We can help you plan, launch and improve campaigns.</p></div><div className="service-grid">{services.map((s,i)=><ServiceCard key={s.title} {...s} index={i}/>)}</div></section>
    <section className="steps-panel section-wrap"><span className="eyebrow">THE CAMPAIGN LOOP</span><div className="steps-row">{[['01','Understand','Offer, audience and goal'],['02','Create','Messaging and creative tests'],['03','Measure','Useful conversion signals'],['04','Improve','Iterate based on findings']].map(([n,t,d])=><div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="cta-section"><span className="eyebrow">LET'S PLAN YOUR NEXT CAMPAIGN</span><h2>Make your ad spend<br/><span className="gradient-text">more intentional.</span></h2><p>Results depend on the offer, market, creative, budget and measurement setup. No guaranteed outcomes — just a clear process.</p><Link to="/contact" className="button button-primary">Get a quote <ArrowUpRight size={18}/></Link></section></>
}
