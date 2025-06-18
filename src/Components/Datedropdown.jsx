import React, { useState, useRef, useEffect } from 'react';
import { dateArray } from '../data/dateArray';
import './DateDropdown.css';

const DateDropdown = ({ selectedDate, onDateChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // show placeholder when empty
  const label = selectedDate || 'Select Date';

  return (
    <div className="date-dropdown" ref={containerRef}>
      <div
        className={`dropdown-header ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="dropdown-label">{label}</span>
        <span className="dropdown-arrow">{open ? '▲' : '▼'}</span>
      </div>

      {open && (
        <div className="dropdown-list">
          {dateArray.map((date) => (
            <div
              key={date}
              className={`date-card ${selectedDate === date ? 'active' : ''}`}
              onClick={() => {
                onDateChange(date);
                setOpen(false);
              }}
            >
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
