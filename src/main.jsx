import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
function App() {
  return <main className="page">
    <img className="mockup" src={`${import.meta.env.BASE_URL}mayank-river-mountain-mockup.png`} alt="Mayank Digital website design with photorealistic mountains, floating islands, a flowing turquoise river, waterfalls and glass service cards" />
    <div className="mobile-note">For the closest match to the supplied design, this preview uses the complete reference composition as one responsive image.</div>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
