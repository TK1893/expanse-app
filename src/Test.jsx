import React from 'react';

const Test = () => {
  const [counter, setCounter] = React.useState(0);
  const clickHandler = (e) => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div>
      <p id="counter">counter: {counter}</p>
      <button onClick={clickHandler}>Increment</button>
    </div>
  );
};

export default Test;

// const Test2 = () => {
//   const inputChangeHandler = (identifier, value) => {
//     if (identifier === 'title') {
//       setEnteredTitle(value);
//     } else if (identifier === 'date') {
//       setEnteredTitle(value);
//     } else {
//       setEnteredAmount(vyalue);
//     }
//   };

//   return <div></div>;
// };
