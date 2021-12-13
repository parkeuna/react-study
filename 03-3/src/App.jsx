import React, { useState } from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

const App = () => {
  const [_init, _setInit] = useState('comp1')
  const [_num, _setNum] = useState(null)
  return (
    <>
      {
        (_init === 'comp1')
        ?
        <Comp1 _num = {_num} _setNum = {_setNum} _setInit={_setInit} />
        :
        <Comp2 _num = {_num} _setInit={_setInit} />
      }
    </>
  );
};

export default App;