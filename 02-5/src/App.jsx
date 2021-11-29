import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([])
  const refName = useRef()
  const refAge = useRef()

  const fnAddArr = () => {
    let name = refName.current.value
    let age = refAge.current.value
    let obj = {
      key : Date.now(),
      name,
      age
    }
    _setArr([..._arr, obj])
  }

  const fnDelete = (e) => {
    let key = parseInt(e.target.getAttribute('data-key'))
    let arr = _arr.filter((v)=>{
      return v.key !== key
    })
    _setArr([...arr])
  }

  return (
    <>
      <p>이름 ,나이를 입력하고 추가버튼을 누르면 출력됩니다</p>
      이름 : <input ref={refName} type="text" /> <br />
      나이 : <input ref={refAge} type="text" /> <br />
      <br />
      <button onClick={fnAddArr}>추가하기</button>
      <hr />
      명단
      {
        _arr.map((v) => {
          return (
            <li data-key={v.key}>
              <strong>{v.name}</strong>
              &nbsp;
              <i>{v.age}</i>
              &nbsp;
              <button onClick={fnDelete}>삭제</button>
            </li>
          )
        })
      }
    </>
  );
};

export default App;