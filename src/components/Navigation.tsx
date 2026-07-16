import { BookOpen, Compass, FileText, Settings, Sparkles, Trophy, UserRound } from 'lucide-react';
import { navItems } from '../data';

const icons = [BookOpen, Compass, Trophy, FileText, UserRound, Sparkles];

export function Navigation({ active, onSelect }: { active: string; onSelect: (value: string) => void }) {
  return <aside className="navigation">
    <button className="brand" onClick={() => onSelect('Biblioteca')} aria-label="Ir para a Biblioteca"><span className="brand-mark">A</span><span>ARCANA</span></button>
    <nav aria-label="Seções da plataforma">
      {navItems.map((item, index) => { const Icon = icons[index]; return <button key={item} onClick={() => onSelect(item)} className={active === item ? 'nav-item is-active' : 'nav-item'}><Icon size={17}/><span>{item}</span></button>; })}
    </nav>
    <div className="nav-bottom"><button className="nav-item"><Settings size={17}/><span>Configurações</span></button><button className="profile"><span className="avatar">E</span><span><b>Elisa Vale</b><small>Leitora errante</small></span></button></div>
  </aside>;
}
