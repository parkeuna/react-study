import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState(['홍길동'])
  const refInput = useRef()
  const fn = (e) => {
    e.preventDefault()
    let name = refInput.current.value
    //_arr = 1 // _setArr(1)
    //let arrCopy = [..._arr] // 기존의 배열을 arrCopy에 복사
    //arrCopy.push(name)
    //_setArr(arrCopy)
    _setArr([..._arr, name])
    refInput.current.value = ''
  }
  return (
    <>
      <p>이름을 입력하고 버튼을 누르면 명단이 출력됩니다</p>
      <form onSubmit={fn}>
        <input ref={refInput} type="text" />
      </form>
      <p>
        명단출력 : 
        {
          _arr.map((v)=>{
            return v + ','
          })
        }
      </p>
    </>
  );
};

export default App;