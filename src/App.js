import React, { useState } from 'react';
import Input from "./components/Input";

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
  setInputValue(value);
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  };

  return (
    <div>
      <Input onInputChange={handleInputChange} value={inputValue} />
    </div>
  );
};

export default App;
