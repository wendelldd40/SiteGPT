export type Book = { id: string; title: string; author: string; color: string; progress: number; featured?: boolean };

export const books: Book[] = [
  { id: 'aurea', title: 'A Cidade de Âmbar', author: 'L. M. Avelar', color: 'wine', progress: 64, featured: true },
  { id: 'tide', title: 'Maré de Vidro', author: 'Iris Faria', color: 'blue', progress: 18 },
  { id: 'moss', title: 'O Jardim Sem Norte', author: 'N. Valença', color: 'moss', progress: 0 },
  { id: 'ash', title: 'As Cinzas de Orfeu', author: 'C. M. Reis', color: 'brown', progress: 72 },
  { id: 'astral', title: 'Atlas dos Céus', author: 'Mara Diniz', color: 'indigo', progress: 0 },
  { id: 'beasts', title: 'Bestiário de Sal', author: 'T. Cardoso', color: 'ochre', progress: 31 },
  { id: 'velvet', title: 'A Casa em Veludo', author: 'Elena A.', color: 'red', progress: 0 },
  { id: 'hour', title: 'A Última Hora', author: 'Rui Campos', color: 'forest', progress: 46 }
];

export const navItems = ['Biblioteca', 'Minha Jornada', 'Conquistas', 'Documentos', 'Personagens', 'Estatísticas'];
