import React, { useState, useEffect } from 'react';
import DateDropdown from './Components/Datedropdown';
import ViewToggle from './components/ViewToggle';
import StrategyCards from './components/StrategyCards';
import { strategyArray } from './data/strategyArray';
import Watermark from './Components/WaterMarks';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Bullish');



  return (
    <div className="strategyUi">
      <div className="toggle">
        <ViewToggle
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <div className="dropDown">
        <DateDropdown
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </div>

      <div className="wrapper">
        {selectedDate ? (
          <StrategyCards
            selectedDate={selectedDate}
            selectedCategory={selectedCategory}
            strategyArray={strategyArray}
          />
        ) : (
          <p className="no-data">Please select a date above.</p>
        )}
      </div>

      
      <Watermark />
    </div>
  );
}

export default App;
