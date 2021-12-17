import React from 'react';

const ListComp = ({ ddayObj, _ddayArr, _setddayArr }) => {
  const fnDelList = () => {
    // 배열에서 클릭한 정보에 해당하는 객체값을 제거
    // _ddayArr 배열의 해당 li의 아이디와 동일하지 않은 객체들 남기기
    let ddayArr = _ddayArr.filter((v) => {
      return (v.id !== ddayObj.id)
    })
    // _ddayArr 배열 변경(_ddayArr를 새로운 배열로 복사)
    _setddayArr([...ddayArr])

    // ddayArr를 하드 디스크(localStorage)에 저장
    let jsonData = JSON.stringify(ddayArr) // ddayArr 배열을 json형태로 변환
    window.localStorage.setItem('jsonDdayArr', jsonData) // 변환된 json을 localStorage에 저장
  }

  return (
    <li>
      <h3>{ddayObj.ddayName}</h3>
      <time>
        <span>{ddayObj.year}년 </span>
        <span>{ddayObj.month}월 </span>
        <span>{ddayObj.date}일</span>
      </time>
      <p>n일 n분 n초 남았습니다</p>
      <button onClick={fnDelList}>삭제</button>
    </li>
  );
};

export default ListComp;