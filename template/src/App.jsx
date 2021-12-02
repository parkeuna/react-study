import React, { useState } from 'react';
import CompOutput from './components/CompOutput';

const App = () => {
  const [_n, _setN] = useState(1)
  let n
  
  const fn = (e) => {
    n = _n
    let increase = parseInt(e.target.getAttribute('data-increase'))
    _setN(n + increase)
  }
  return (
    <>
      <p>버튼을 클릭하면 증감 연산이 됩니다</p>
      <hr />
      <CompOutput prop_n={_n}/>
      <hr />
      <button data-increase="-1" onClick={fn}>1 감소</button>
      <button data-increase="1" onClick={fn}>1 증가</button>
    </>
  );
};

export default App;