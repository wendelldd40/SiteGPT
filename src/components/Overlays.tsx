import { motion } from 'framer-motion';
import { Clock3, Gem, Map, ScrollText, Trophy } from 'lucide-react';

export function Dashboard() { const cards = [[Clock3,'28h 42m','tempo entre histórias'],[Trophy,'07','finais revelados'],[Gem,'43%','do mundo descoberto']]; return <section className="dashboard"><div className="section-heading"><span>SUA JORNADA</span><button>Ver detalhes</button></div><div className="stats">{cards.map(([Icon, value, label], i) => { const I = Icon as typeof Clock3; return <motion.div className="stat" key={String(value)} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + i*.08 }}><I size={17}/><strong>{value}</strong><small>{label}</small></motion.div>; })}</div></section> }

export function DocumentTray() { return <section className="document-tray"><div className="tray-handle"/><div className="tray-copy"><span>ARQUIVO ENCONTRADO</span><b>Um mapa dobrado aguarda você</b><small>Achado em A Cidade de Âmbar</small></div><Map size={28}/><button aria-label="Abrir documento"><ScrollText size={16}/></button></section> }
