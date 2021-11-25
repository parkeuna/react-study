import React, { useRef, useState } from 'react';

const App = () => {
  const [_result, _setResult] = useState(0)
  const refInput1 = useRef()
  const refInput2 = useRef()
  const fn = () => {
    let oper = document.querySelector('select option:checked').value
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let result
    if (oper === '+') {
      result = num1 + num2
    }
    else if (oper === '-') {
      result = num1 - num2
    } 
    else if (oper === '*') {
      result = num1 * num2
    } 
    else if (oper === '/') {
      result = num1 / num2
    }
    _setResult(result)
  }
  return (
    <>
      <p>숫자를 변경하거나, 연산자를 변경하면 값이 바로 변경됨</p>
      <p>
        <input onChange={fn} ref={refInput1} defaultValue="0" type="text" />
        &nbsp;
        <select onChange={fn}>
          <option defaultValue="+">+</option>
          <option defaultValue="-">-</option>
          <option defaultValue="*">*</option>
          <option defaultValue="/">/</option>
        </select>
        &nbsp;
        <input onChange={fn} ref={refInput2} defaultValue="0" type="text" />
      </p>
      <p>
        결과 : {_result}
      </p>
    </>
  );
};

export default App;