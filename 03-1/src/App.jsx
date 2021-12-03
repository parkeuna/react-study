import React, { useState } from 'react';
import CompBtns from './components/CompBtns';
import CompOutput from './components/CompOutput';

const App = () => {
  const [_num, _setNum] = useState(1)
  const fn = (e) => {
    let num = _num
    let increase = parseInt(e.target.getAttribute('data-increase'))
    _setNum(num + increase)
  }
  return (
    <>
      <p>증감연산</p>
      <hr />
      <CompOutput _num = {_num} />
      <hr />
      <CompBtns fn = {fn} />
    </>
  );
};

export default App;