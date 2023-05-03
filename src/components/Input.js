import React from 'react';

const Input = ({ onInputChange, value }) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    onInputChange(inputValue);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
