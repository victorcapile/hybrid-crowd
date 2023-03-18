import React from 'react';

const TopCreators = () => {
  const topCreators = [
    {
      id: 1,
      imagem: 'image-1.jpg',
      titulo: 'LUMO',
      descricao:'Helping Shape The World Wide Web.',
      link: 'https://projeto1.com',
    },
    {
      id: 2,
      imagem: 'image-2.jpg',
      titulo: 'Netuno Kino',
      descricao:'Ilustrações sob demanda para te fazer sonhar alto.',
      link: 'https://projeto2.com',
    },
    {
      id: 3,
      imagem: 'image-3.jpg',
      titulo: 'Daffil',
      descricao:'Ilustrações de outro mundo.',
      link: 'https://projeto3.com',
    },
    {
      id: 4,
      imagem: 'image-3.jpg',
      titulo: 'NODI',
      descricao: 'Ritmo & Poesia.',
      link: 'https://projeto3.com',
    },
    {
    id: 5,
    imagem: 'image-3.jpg',
    titulo: 'PARKIN',
    descricao: 'Produção Musical daquele jeitão que nós sabe.',
    link: 'https://projeto3.com',
    }

  ];

  return (
    <div className="max-w-7xl pr-5 w-64 h-32">
      <h2 className="font-epilogue font-bold text-[18px] text-white pb-10 pt-10">Criadores em Destaque</h2>
      <div className="flex-wrap justify-between">
        {topCreators.map(criador => (
          <div className="w-full md:w-3/3" key={criador.id}>
            <div className="rounded-lg overflow-hidden shadow-md bg-[#1c1c24]">
              <div className="p-4 text-pink">
                <h3 className="font-epilogue font-light text-[18px] text-left font-medium text-white mb-2">{criador.titulo}</h3>
                <p className="text-gray-600 text-base mb-4 ">{criador.descricao}</p>
                <a className="font-epilogue font-light text-[15px] block text-center text-white bg-pink-500 p-2 rounded-lg hover:bg-red-700 transition-colors duration-300" href={criador.link}>Ver Criador</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
