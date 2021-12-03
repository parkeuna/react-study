import React, { useState } from 'react';
import CompInput from './components/CompInput';
import CompOutput from './components/CompOutput';

const App = () => {
  const fnRanNum = () => {
    return Math.floor(Math.random() * 10)
  }
  const [_num, _setNum] = useState(fnRanNum())
  
  return (
    <>
      <p>제시된 숫자를 더하기로 완성하세요</p>
      <CompOutput _num = {_num} />
      <CompInput _num = {_num} />
    </>
  );
};

export default App;