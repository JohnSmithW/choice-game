import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import Buttons from '../Buttons/Buttons';
import './Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.restart = this.restart.bind(this);
  }

  restart() {
    state.gameOver = false;
    state.stats = { tribe: 50, folks: 50, law: 50, budget: 50 };
    state.days = 0;
  }

  render() {
    return (
      <div className="display-main">
        {!state.gameOver ? (
          <div className="card">
            <div className="cart-character">
              <div className={this.props.image}></div>
              <span className="cart-character__name">{this.props.name}</span>
            </div>
            <div className="cart-text">
              <span className="cart-text__item">{this.props.text}</span>
            </div>
          </div>
        ) : (
          <div className="game-over">
            <span className="game-over__item">You were Sheriff for {state.days} days</span>
            <div
              onClick={() => {
                this.restart();
              }}
              className="game-over__button">
              Restart
            </div>
          </div>
        )}
        <span className={!state.gameOver ? 'day-counter' : 'day-counter_off'}>day:{state.days}</span>
        <Buttons class={!state.gameOver ? 'buttons-box' : 'buttons-box_off'} />
      </div>
    );
  }
}

export default view(Display);
