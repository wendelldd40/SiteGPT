import { useState } from 'react';
import { Bell, Menu, Search, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { books, type Book } from './data';
import { Navigation } from './components/Navigation';
import { Bookshelf, BookPortal } from './components/Bookshelf';
import { Dashboard, DocumentTray } from './components/Overlays';

export default function App() {
 const [active, setActive] = useState('Biblioteca'); const [selected, setSelected] = useState<Book | null>(null); const [sound, setSound] = useState(false);
 return <main className="app-shell"><div className="atmosphere"><span/><span/><span/><span/></div><Navigation active={active} onSelect={setActive}/><section className="main-stage">
   <header><button className="mobile-menu" aria-label="Abrir menu"><Menu/></button><div className="crumb"><span>ACERVO /</span> {active.toUpperCase()}</div><div className="header-actions"><button className={sound ? 'sound on' : 'sound'} onClick={() => setSound(!sound)} aria-label="Alternar som ambiente"><Volume2 size={18}/><i>{sound ? 'Som ambiente' : 'Som desativado'}</i></button><button className="icon-button" aria-label="Notificações"><Bell size={18}/><b/></button><button className="icon-button" aria-label="Pesquisar"><Search size={18}/></button></div></header>
   <div className="hero-copy"><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>BEM-VINDA DE VOLTA, ELISA</motion.p><motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Toda história<br/><i>começa com uma porta.</i></motion.h1><motion.div className="hero-note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}><span>✦</span><p>Uma nova passagem surgiu<br/>em sua biblioteca.</p></motion.div></div>
   <Bookshelf books={books} onOpen={setSelected}/><Dashboard/><DocumentTray/>
 </section><BookPortal book={selected} onClose={() => setSelected(null)}/></main>;
}
