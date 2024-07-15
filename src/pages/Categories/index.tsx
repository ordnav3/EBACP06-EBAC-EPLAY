import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]
const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Aliquip elit voluptate nulla aute anim incididunt occaecat excepteur nostrud Lorem dolor consequat ad.',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} background="gray" title="RPG" />
    <ProductsList games={emBreve} background="black" title="Ação" />
    <ProductsList games={promocoes} background="gray" title="Aventura" />
    <ProductsList games={emBreve} background="black" title="FPS" />
  </>
)

export default Categories
