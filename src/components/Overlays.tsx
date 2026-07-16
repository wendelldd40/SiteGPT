import { motion } from 'framer-motion';
import { Clock3, Gem, Map, ScrollText, Trophy } from 'lucide-react';

export function Dashboard() {
  const cards = [
    { Icon: Clock3, value: '28h 42m', label: 'tempo entre histórias' },
    { Icon: Trophy, value: '07', label: 'finais revelados' },
    { Icon: Gem, value: '43%', label: 'do mundo descoberto' }
  ];

  return <section className="dashboard"><div className="section-heading"><span>SUA JORNADA</span><button>Ver detalhes</button></div><div className="stats">{cards.map(({ Icon, value, label }, i) => <motion.div className="stat" key={value} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + i*.08 }}><Icon size={17}/><strong>{value}</strong><small>{label}</small></motion.div>)}</div></section>;
}

export function DocumentTray() { return <section className="document-tray"><div className="tray-handle"/><div className="tray-copy"><span>ARQUIVO ENCONTRADO</span><b>Um mapa dobrado aguarda você</b><small>Achado em A Cidade de Âmbar</small></div><Map size={28}/><button aria-label="Abrir documento"><ScrollText size={16}/></button></section> }
