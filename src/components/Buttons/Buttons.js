import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Buttons.css';

function getRandomNumber() {
  while (state.random.length < state.characters.length) {
    var number = Math.floor(Math.random() * state.characters.length - 1) + 1;
    if (state.random.indexOf(number) === -1) state.random.push(number);
  }
  state.number = state.random[state.index];
}

function accept() {
  getRandomNumber();
  state.decition = !state.decition;
  if (!state.decition) {
    state.consequence = state.characters[state.index].positive.text;
    state.pass = false;
  } else {
    if (state.index <= state.characters.length - 1) {
      state.stats.tribe = state.stats.tribe - state.characters[state.index].positive.tribe;
      state.stats.folks = state.stats.folks - state.characters[state.index].positive.folks;
      state.stats.law = state.stats.law - state.characters[state.index].positive.law;
      state.stats.budget = state.stats.budget - state.characters[state.index].positive.budget;
      state.pass = true;
      state.index++;
      state.days++;
    }
    if (state.index > state.characters.length - 1) {
      state.index = 0;
    }
  }
}

function cancel() {
  state.decition = !state.decition;
  if (!state.decition) {
    state.consequence = state.characters[state.index].negative.text;
    state.pass = false;
  } else {
    if (state.index <= state.characters.length - 1) {
      state.stats.tribe = state.stats.tribe - state.characters[state.index].negative.tribe;
      state.stats.folks = state.stats.folks - state.characters[state.index].negative.folks;
      state.stats.law = state.stats.law - state.characters[state.index].negative.law;
      state.stats.budget = state.stats.budget - state.characters[state.index].negative.budget;
      state.pass = true;
      state.index++;
      state.days++;
    }
    if (state.index > state.characters.length - 1) {
      state.index = 0;
    }
  }
}

function Buttons(props) {
  return (
    <div className={props.class}>
      <div
        onClick={() => {
          cancel();
        }}
        className="button-container button-container_no">
        <div className="button-container__item button-container__item_no"></div>
      </div>
      <div
        onClick={() => {
          accept();
        }}
        className="button-container button-container_yes">
        <div className="button-container__item button-container__item_yes"></div>
      </div>
    </div>
  );
}

export default view(Buttons);
