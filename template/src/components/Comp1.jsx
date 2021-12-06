import React from 'react';

const Comp1 = ({_num, _setNum}) => {
  const fnShowNum = () => {
    let num = Math.floor(Math.random() * 100)
    _setNum(num)
  }
  return (
    <>
      <section className="comp1">
        <p>
          버튼을 클릭하면 화면에 출력되는 숫자를 기억해주세요
          <br />
          (숫자는 3초 뒤에 사라집니다)
        </p>
        <hr />
        <p>숫자 : {_num}</p>
        <hr />
        {
          /*  
          {
            (!_num) // num값이 없다면
            ? <button onClick={fnShowNum}>숫자 생성</button> 
            : null // 아무것도 출력하지 않는다
          }
          */
         (!_num) && <button onClick={fnShowNum}>숫자 생성</button>
        }
        
      </section>
    </>
  );
};

export default Comp1;