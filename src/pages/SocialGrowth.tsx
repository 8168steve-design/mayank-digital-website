import { ArrowUpRight, Camera, Facebook, Heart, Instagram, MessageCircle, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import { whatsappLink } from '../config'
export default function SocialGrowth() {
  const services = [
    { icon: Instagram, title: 'Instagram Strategy', desc: 'Profile positioning, content themes and a repeatable publishing plan.', tag: 'INSTAGRAM' },
    { icon: Facebook, title: 'Facebook Presence', desc: 'Page optimization, useful content and community-focused engagement.', tag: 'FACEBOOK' },
    { icon: Camera, title: 'Snapchat Content', desc: 'Ideas for short-form stories and reaching an audience with relevant content.', tag: 'SNAPCHAT' },
    { icon: Heart, title: 'Engagement Strategy', desc: 'Encourage authentic conversations through thoughtful community management.', tag: 'COMMUNITY' },
    { icon: Users, title: 'Audience Development', desc: 'Build discoverability with consistent, audience-focused content.', tag: 'GROWTH' },
    { icon: MessageCircle, title: 'Social Management', desc: 'Content planning, profile consistency and communication workflows.', tag: 'MANAGEMENT' }
  ]
  return <><section className="page-hero section-wrap"><span className="eyebrow">02 / SOCIAL MEDIA GROWTH</span><h1>Build a community.<br/><span className="gradient-text">Not just a number.</span></h1><p>Make your social presence more useful, recognizable and connected to your brand.</p><a className="button button-primary" href={whatsappLink('Hi Mayank Digital, I want help with social media growth.')} target="_blank" rel="noreferrer">Talk social strategy <ArrowUpRight size={18}/></a></section>
    <section className="section-wrap section-block"><div className="section-heading"><div><span className="eyebrow">SOCIAL SERVICES</span><h2>Show up with<br/><span className="gradient-text">a clear point of view.</span></h2></div><p>We focus on authentic audience development, content consistency and platform-appropriate growth strategies.</p></div><div className="service-grid">{services.map((s,i)=><ServiceCard key={s.title} {...s} index={i}/>)}</div></section>
    <section className="feature-band"><div className="feature-orb"><Heart size={58}/><span/></div><div><span className="eyebrow">AUTHENTIC BY DESIGN</span><h2>Real people.<br/><span className="gradient-text">Relevant conversations.</span></h2><p>We do not promise instant virality or use fake followers and bots. Sustainable growth takes consistent work and depends on your content, audience and platform.</p><Link to="/contact" className="text-link">Plan your social presence <ArrowUpRight size={17}/></Link></div></section>
    <section className="cta-section"><span className="eyebrow">LET'S BUILD YOUR PRESENCE</span><h2>Your next post can<br/>start a <span className="gradient-text">conversation.</span></h2><a className="button button-primary" href={whatsappLink('Hi Mayank Digital, I would like a social media plan.')} target="_blank" rel="noreferrer">Get in touch <ArrowUpRight size={18}/></a></section></>
}
