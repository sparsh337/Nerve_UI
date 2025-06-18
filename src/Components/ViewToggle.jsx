import React from 'react';
import './ViewToggle.css';
import { strategyArray } from '../data/strategyArray';

const ViewToggle = ({ selectedCategory, onCategoryChange }) => {
  // derive categories

  const categories = strategyArray.map((item) => item.View);

  return (
    <div className="view-toggle">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? 'active' : ''}
          onClick={() => onCategoryChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ViewToggle;
