import './SearchShop.css';
import React, { useContext } from 'react';
import { CarrinhoContext } from './CarrinhoContext';




import forza from "../assets/Forza-img.png"
import DarkestDungeon from '../assets/DarkestDungeon-img.jpg';
import Battlefield from '../assets/battlefield.jpg'
import ElderRingImg from "../assets/Elder ring.jpg"
import HadesImg from '../assets/HADES.png'
import CallistoProtImg from '../assets/the-callisto-protocol.jpg'



export const SearchShop = () => {
  const { adicionarItem } = useContext(CarrinhoContext);

  const jogos = [
    {
      id: 1,
      name: 'Forza Horizon 5',
      price: 249.99,
      image: forza,
      description: 'Forza Horizon 5 é o novo lançamento da aclamada série de jogos de corrida desenvolvida pela Playground Games. Com cenários deslumbrantes, uma grande variedade de carros e muita adrenalina, Forza Horizon 5 é diversão garantida para fãs de corrida.'
    },
    {
      id: 2,
      name: 'Darkest Dungeon',
      price: 59.99,
      image: DarkestDungeon,
      description: 'Darkest Dungeon é um jogo de RPG de exploração de masmorras desenvolvido pela Red Hook Studios. Com um estilo artístico sombrio e uma jogabilidade desafiadora, Darkest Dungeon é uma aventura emocionante para fãs de RPG.'
    },
    {
      id: 3,
      name: 'Battlefield 2042',
      price: 299.99,
      image: Battlefield,
      description: 'Battlefield 2042 é o novo lançamento da popular franquia de jogos de tiro em primeira pessoa desenvolvida pela DICE. Com batalhas épicas em um futuro próximo, Battlefield 2042 é diversão garantida para fãs de jogos de tiro.'
    },
    {
      id: 4,
      name: 'Elden Ring',
      price: 199.99,
      image: ElderRingImg,
      description: 'Elden Ring é um jogo de RPG de ação desenvolvido pela FromSoftware em colaboração com o escritor George R. R. Martin. Com um vasto mundo aberto, chefões desafiadores e uma narrativa envolvente, Elden Ring é uma aventura emocionante para fãs de RPG.'
    },
    {
      id: 5,
      name: 'Hades',
      price: 79.99,
      image: HadesImg,
      description: 'Hades é um jogo de ação e aventura roguelike desenvolvido pela Supergiant Games. Com um estilo artístico único, uma narrativa envolvente e uma jogabilidade desafiadora, Hades é uma experiência incrível para fãs de jogos indie.'
    },
    {
      id: 6,
      name: 'The Callisto Protocol',
      price: 149.99,
      image: CallistoProtImg,
      description: 'The Callisto Protocol é um jogo de terror em primeira pessoa desenvolvido pela Striking Distance Studios. Com uma narrativa sombria e arrepiante e uma jogabilidade intensa, The Callisto Protocol é uma experiência aterrorizante para fãs de jogos de terror.'
    }
  ];
      
  return (
    
    <>
      

<div className='card-Space container'>

  <div className="row row-cols-1 row-cols-md-3 g-4">
    {jogos.map((item) => (
      <div className="col">
        <div className="card h-100">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description }</p>
            <button className="btn btn-primary" onClick={() => adicionarItem(item)}>{item.price}</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default SearchShop
