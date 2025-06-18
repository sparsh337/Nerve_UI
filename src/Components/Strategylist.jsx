import React from 'react';
import './StrategyList.css';

const StrategyList = ({ strategies }) => {
  // Count duplicates
  const counts = strategies.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cards-wrapper vertical-list">
      {Object.entries(counts).map(([name, count]) => (
        <div className="strategy-row" key={name}>
          <span className="strategy-name">{name}</span>
          
          <span className="strategy-count">
          &#10022;&nbsp; {count} {count === 1 ? 'Strategy' : 'Strategies'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StrategyList;
