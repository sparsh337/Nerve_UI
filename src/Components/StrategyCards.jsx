import React from 'react';
import StrategyList from './Strategylist';
import './StrategyCards.css';
import { strategyArray } from '../data/strategyArray';

const StrategyCards = ({ selectedDate, selectedCategory }) => {
  // find the correct View object
  const viewObj = strategyArray.find((item) => item.View === selectedCategory);
  const strategies = viewObj?.Value[selectedDate] || [];

  if (strategies.length === 0) {
    return (
      <p className="no-data">
        No strategies for {selectedCategory} on {selectedDate}.
      </p>
    );
  }

  return (
    <div className="strategy-category">
      <h3>{selectedCategory}</h3>
      <StrategyList strategies={strategies} />
    </div>
  );
};

export default StrategyCards;
