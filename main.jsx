import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BarChart3, MousePointer2, Target, Zap, Layers3, Menu, Instagram, Facebook, Search, CheckCircle2 } from 'lucide-react'
import './style.css'

const services = [
  { icon: Search, n: '01', title: 'Google Ads', desc: 'Reach people already searching for what you offer—with campaigns built around intent.' },
  { icon: Facebook, n: '02', title: 'Meta Ads', desc: 'Scroll-stopping Facebook and Instagram campaigns designed to spark action.' },
  { icon: BarChart3, n: '03', title: 'Performance Growth', desc: 'Clear tracking, sharper experiments and smarter decisions at every step.' },
]
function App() {
  return <div className="site-shell">
    <div className="ambient ambient-a"/><div className="ambient ambient-b"/><div className="grid-bg"/>
    <header className="nav wrap">
      <a className="brand" href="#home"><span className="brand-mark">M<span>✦</span></span><span>MAYANK <b>DIGITAL</b></span></a>
      <nav><a href="#services">Services</a><a href="#approach">Our approach</a><a href="#results">Why us</a></nav>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
      <button className="menu-btn" aria-label="Menu"><Menu/></button>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/> DIGITAL GROWTH STUDIO <span className="eyebrow-line"/></div>
          <h1>Make your<br/>brand <span className="gradient-text">impossible</span><br/><span className="outline-text">to ignore.</span></h1>
          <p className="hero-sub">We turn attention into action with high-performance Google Ads, Meta Ads and creative strategy built for ambitious brands.</p>
          <div className="hero-actions"><a className="button-primary" href="#contact">Start growing <ArrowUpRight size={18}/></a><a className="text-link" href="#services">Explore services <span>↘</span></a></div>
          <div className="hero-proof"><div className="avatar-stack"><i>M</i><i>D</i><i>+</i></div><div><strong>Strategy meets creativity</strong><small>Every click has a purpose.</small></div><div className="proof-divider"/><div className="proof-mini"><span className="proof-spark">✳</span><strong>Built for growth</strong><small>Not just impressions.</small></div></div>
        </div>
        <div className="hero-art" aria-label="Abstract floating 3D marketing dashboard illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="float-cube cube-one"><span/></div><div className="float-cube cube-two"><span/></div><div className="float-cube cube-three"><span/></div>
          <div className="glass-orb orb-main"><div className="orb-shine"/><div className="orb-ring"/></div><div className="mini-orb mini-orb-one"/><div className="mini-orb mini-orb-two"/>
          <div className="dashboard-card"><div className="dash-top"><span className="dash-dot"/> CAMPAIGN OVERVIEW <span className="dash-menu">•••</span></div><div className="dash-label">Campaign performance <span className="trend">↗ +24.8%</span></div><div className="dash-number">Growing<span>.</span></div><div className="chart"><div className="chart-glow"/><svg viewBox="0 0 330 90" preserveAspectRatio="none"><defs><linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#6d5cff"/><stop offset="100%" stopColor="#37e9ff"/></linearGradient><linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7b61ff" stopOpacity=".28"/><stop offset="100%" stopColor="#7b61ff" stopOpacity="0"/></linearGradient></defs><path d="M0 76 C22 70 25 55 48 61 S78 65 100 43 S130 52 151 38 S184 48 205 24 S244 42 263 19 S300 23 330 5 L330 90 L0 90Z" fill="url(#areaGlow)"/><path d="M0 76 C22 70 25 55 48 61 S78 65 100 43 S130 52 151 38 S184 48 205 24 S244 42 263 19 S300 23 330 5" fill="none" stroke="url(#lineGlow)" strokeWidth="2.5" strokeLinecap="round"/></svg></div><div className="dash-bottom"><span>Reach <b>↑</b></span><span>Clicks <b>↑</b></span><span>Conversions <b>↑</b></span></div></div>
          <div className="floating-pill pill-click"><span className="pill-icon"><MousePointer2 size={15}/></span><div><small>CLICK THROUGH</small><b>Optimized</b></div><span className="pill-arrow">↗</span></div>
          <div className="floating-pill pill-target"><span className="target-icon"><Target size={19}/></span><div><small>SMART TARGETING</small><b>Right audience</b></div></div>
          <div className="spark spark-one">✦</div><div className="spark spark-two">✧</div><div className="spark spark-three">✦</div>
        </div>
        <div className="hero-bottom-note"><span>01 / 03</span><div/><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="marquee-band"><div className="marquee-track"><span>GOOGLE ADS</span><b>✳</b><span>META ADS</span><b>✳</b><span>PERFORMANCE</span><b>✳</b><span>CREATIVE STRATEGY</span><b>✳</b><span>GOOGLE ADS</span><b>✳</b><span>META ADS</span><b>✳</b><span>PERFORMANCE</span><b>✳</b><span>CREATIVE STRATEGY</span><b>✳</b></div></section>

      <section className="services-section wrap" id="services"><div className="section-heading"><div><div className="eyebrow">WHAT WE DO <span className="eyebrow-line"/></div><h2>Growth isn't luck.<br/><span className="gradient-text">It's a system.</span></h2></div><p>Creative thinking. Precise targeting. Performance data. One connected engine to help your brand move forward.</p></div><div className="service-grid">{services.map((s, i) => <article className={`service-card service-${i+1}`} key={s.n}><div className="service-card-top"><span className="service-icon"><s.icon size={22}/></span><span className="service-number">{s.n} / 03</span></div><h3>{s.title}</h3><p>{s.desc}</p><a href="#contact" aria-label={`Ask about ${s.title}`} className="round-arrow"><ArrowUpRight size={20}/></a><div className="card-glow"/></article>)}</div></section>

      <section className="approach-section" id="approach"><div className="wrap approach-inner"><div className="approach-visual"><div className="stack-ring ring-a"/><div className="stack-ring ring-b"/><div className="stack-ring ring-c"/><div className="core-cube"><div/><div/><div/></div><div className="approach-chip chip-a"><Zap size={14}/> Test fast</div><div className="approach-chip chip-b"><Layers3 size={14}/> Build smart</div></div><div className="approach-copy"><div className="eyebrow">OUR APPROACH <span className="eyebrow-line"/></div><h2>Less guesswork.<br/><span className="gradient-text">More momentum.</span></h2><p>We bring your ads, creative and measurement together—so every campaign learns, improves and works toward a clear business goal.</p><ul><li><CheckCircle2 size={17}/> Strategy before spend</li><li><CheckCircle2 size={17}/> Creative that earns attention</li><li><CheckCircle2 size={17}/> Tracking you can understand</li></ul><a className="text-link" href="#contact">Build your growth plan <span>↗</span></a></div></div></section>

      <section className="why-section wrap" id="results"><div className="why-copy"><div className="eyebrow">THE MAYANK DIFFERENCE <span className="eyebrow-line"/></div><h2>Make every<br/>move <span className="gradient-text">count.</span></h2><p>No confusing dashboards. No random tactics. Just a thoughtful growth partner focused on what matters to your business.</p></div><div className="why-metrics"><div className="metric-card"><span className="metric-icon"><Target size={19}/></span><h3>Clear goals</h3><p>Campaigns aligned to real business objectives.</p></div><div className="metric-card"><span className="metric-icon"><BarChart3 size={19}/></span><h3>Smart testing</h3><p>Use data to learn what connects and what converts.</p></div><div className="metric-card"><span className="metric-icon"><Zap size={19}/></span><h3>Agile execution</h3><p>Keep improving as your audience and market evolve.</p></div></div></section>

      <section className="contact-section wrap" id="contact"><div className="contact-panel"><div className="contact-orb"/><div className="eyebrow"><span className="live-dot"/> YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to make<br/>some <span className="gradient-text">noise?</span></h2><p>Tell us where you want to go. Let's map out your next move.</p><a className="button-primary" href="mailto:hello@mayankdigital.example?subject=Let's%20grow%20my%20business">Start a conversation <ArrowUpRight size={18}/></a><small className="contact-note">Replace this sample email with your business email before publishing.</small></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">M<span>✦</span></span><span>MAYANK <b>DIGITAL</b></span></a><p>Built to move brands forward.</p><span>© {new Date().getFullYear()} Mayank Digital</span></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
