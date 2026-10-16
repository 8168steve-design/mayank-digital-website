import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, desc, tag, to = '/contact', index = 0 }: { icon: LucideIcon, title: string, desc: string, tag: string, to?: string, index?: number }) {
  return <motion.article className="service-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06, duration: 0.45 }} whileHover={{ y: -7, rotateX: 2 }}>
    <div className="card-top"><span className="service-icon"><Icon size={23}/></span><span className="card-tag">{tag}</span></div>
    <h3>{title}</h3><p>{desc}</p><Link to={to} className="card-link">Explore service <ArrowUpRight size={16}/></Link>
  </motion.article>
}
