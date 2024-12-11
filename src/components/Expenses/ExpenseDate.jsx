import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  // VARIABLES
  const month = props.datum.toLocaleString('en-US', { month: 'long' });
  const day = props.datum.toLocaleString('en-US', { day: '2-digit' });
  const year = props.datum.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
