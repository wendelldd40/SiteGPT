import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Book } from '../data';

export function Bookshelf({ books, onOpen }: { books: Book[]; onOpen: (book: Book) => void }) {
  return <section className="shelf-region" aria-label="Estante em destaque">
    <div className="shelf-label"><span>CONTINUE SUA JORNADA</span><i/></div>
    <div className="bookshelf"><div className="warm-light"/>
      {books.map((book, index) => <motion.button key={book.id} className={`book ${book.color} ${book.featured ? 'featured' : ''}`} style={{ '--order': index } as CSSProperties} onClick={() => onOpen(book)} whileHover={{ y: -18, rotate: index % 2 ? 1.5 : -1.5 }} whileTap={{ scale: .97 }} aria-label={`Abrir ${book.title}`}>
        <span className="book-shine"/><span className="book-spine"><em>{book.title}</em><small>{book.author}</small></span>{book.featured && <span className="book-rune">✦</span>}
      </motion.button>)}
      <div className="shelf-plank"/>
    </div>
    <div className="shelf-caption"><span>8 histórias aguardando</span><button>Ver catálogo <ArrowUpRight size={15}/></button></div>
  </section>;
}

export function BookPortal({ book, onClose }: { book: Book | null; onClose: () => void }) {
 return <AnimatePresence>{book && <motion.div className="portal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
   <button className="portal-close" onClick={onClose} aria-label="Fechar prévia"><X/></button>
   <motion.article className={`open-book ${book.color}`} initial={{ rotateY: -65, scale: .72, y: 80 }} animate={{ rotateY: 0, scale: 1, y: 0 }} exit={{ rotateY: 35, opacity: 0 }} transition={{ type: 'spring', damping: 20, stiffness: 115 }}>
     <div className="open-cover"><span>ARCANA ORIGINAL</span><h2>{book.title}</h2><p>{book.author}</p><i>✦</i></div>
     <div className="open-page"><span>CAPÍTULO ATUAL</span><h3>O convite sob a porta</h3><p>A chuva escrevia novos caminhos no vidro. Do outro lado do corredor, alguém deixou uma chave para você.</p><button className="continue">Retomar capítulo <BookOpen size={16}/></button></div>
   </motion.article>
 </motion.div>}</AnimatePresence>;
}
