import React, { useRef, useState } from 'react';

const fnSetNumber = () => {
  let num = Math.ceil(Math.random()*9)
  return num
}

let score = 0

const App = () => {
  const [_num1, _setNum1] = useState(fnSetNumber())
  const [_num2, _setNum2] = useState(fnSetNumber())
  const [_result, _setResult] = useState('결과')
  const [_score, _setScore] = useState(0)
  const refInput = useRef()
  
  const fnCheckResult = (e) => {
    e.preventDefault() // 상단에 씀
    // let userNum = document.getElementById('userInput').value
    let userNum = parseInt(refInput.current.value)
    if ((_num1 * _num2) === userNum) {
      _setResult('정답')
      _setNum1(fnSetNumber())
      _setNum2(fnSetNumber())
      _setScore(score += 1)
    } else {
      _setResult('오답')
      _setScore(score -= 1)
    }
    refInput.current.value = ''
  }

  return (
    <>
      <p>{_num1}*{_num2}</p>
      <form onSubmit={fnCheckResult}>
        <input ref={refInput} type="text" placeholder="값을 입력하세요" />
      </form>
      <p>
        결과 : {_result} <br />
        점수 : {_score}
      </p>
    </>
  );
};

export default App;