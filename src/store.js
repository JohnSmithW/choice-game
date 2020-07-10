import { store } from '@risingstack/react-easy-state';
import characters from './data';

const state = store({
  characters: characters,
  index: 0,
  days: 0,
  decition: true,
  consequence: '',
  stats: { tribe: 50, folks: 50, law: 50, budget: 50 },
  default: { tribe: 50, folks: 50, law: 50, budget: 50 },
  pass: false,
  gameOver: false,
  random: [],
  number: '',
});

export default state;
