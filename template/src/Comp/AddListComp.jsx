import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddListComp = ({_ddayArr, _setddayArr}) => {
  const navi = useNavigate()
  const refDdayName = useRef()
  const refDdayDate = useRef()
  
  const fnCancel = (e) => {
    e.preventDefault()
    navi('/') // 목록 페이지로 이동
  }

  const fnAddDday = (e) => {
    e.preventDefault()
    // 디데이 이름 가져오기
    let ddayName = refDdayName.current.value
    // 디데이 날짜 가져오기
    let ddayDate = refDdayDate.current.value
    // 디데이 목록을 추가
    let ddayDateArr = ddayDate.split('-')
    let year = parseInt(ddayDateArr[0])
    let month = parseInt(ddayDateArr[1])
    let date = parseInt(ddayDateArr[2])
    let ddayObj = {
      id:Date.now(),
      ddayName,
      year,
      month,
      date
    }
    // 디데이 이름, 날짜의 입력 여부 검사
    if(ddayName === '') { // 디데이 이름을 입력하지 않았다면
      alert('디데이 이름을 입력하세요')
      refDdayName.current.focus()
      return false;
    }
    if(ddayDate === '') { // 디데이 날짜을 입력하지 않았다면
      alert('디데이 날짜을 입력하세요')
      refDdayDate.current.focus()
      return false;
    }

    // 잘못된 예시: _setddayArr(_ddayArr) -> _ddayArr를 변경(_ddayArr로)
    // _ddayArr를 변경(_ddayArr를 새로운 배열로 복사)
    let ddayArr = [..._ddayArr,ddayObj]
    _setddayArr(ddayArr)
    // ddayArr를 하드 디스크(localStorage)에 저장
    let jsonData = JSON.stringify(ddayArr) // ddayArr 배열을 json형태로 변환
    window.localStorage.setItem('jsonDdayArr', jsonData) // 변환된 json을 localStorage에 저장

    alert('디데이 목록에 추가되었습니다.')
    navi('/') // 목록 페이지로 이동
  }
  return (
    <main>
      <form>
        <p>
          <label htmlFor="ddayName">디데이명</label>
          <input id="ddayName" ref={refDdayName} type="text" />
        </p>
        <p>
          <label htmlFor="ddayDate">날짜</label>
          <input id="ddayDate" ref={refDdayDate} type="date" />
        </p>
        <p>
          <button onClick={fnAddDday}>추가하기</button>
          &nbsp;
          <button onClick={fnCancel}>취소하기</button>
        </p>
      </form>
    </main>
  );
};

export default AddListComp;