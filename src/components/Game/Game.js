import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Game.css';
import Stats from '../Stats/Stats';
import Display from '../Display/Display';

class Game extends React.Component {
  render() {
    return (
      <div className="game-main">
        <Stats />
        <Display
          image={'cart-character__image' + ' ' + state.characters[state.index].class}
          text={state.decition ? state.characters[state.index].text : state.consequence}
          name={state.characters[state.index].name}
        />
      </div>
    );
  }
}

export default view(Game);
