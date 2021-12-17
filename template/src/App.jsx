import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddListComp from './Comp/AddListComp';
import ListContainerComp from './Comp/ListContainerComp';
import { dummyDdayArr } from './data/dummyArr';

const App = () => {
  /* window.localStorage.removeItem('jsonDdayArr')
  console.log(
    window.localStorage.getItem('jsonDdayArr')
  ); */

  const fnGetJson = () => {
    let jsonData = window.localStorage.getItem('jsonDdayArr')
    if (jsonData) { // 로컬스토리지에 데이터가 존재하면
      let ddayArr = JSON.parse(jsonData) // json데이터를 자바스크립트 데이터로 변환
      return[...ddayArr]
    } else {// 로컬스토리지에 데이터가 없으면
      return [...dummyDdayArr]
    }
  }
  const [_ddayArr, _setddayArr] = useState(fnGetJson()) // useState(ddayArr)

  return (
    <BrowserRouter>
      <h1>D-day</h1>
      <Routes>
        <Route path="/" element={
          <ListContainerComp _ddayArr={_ddayArr} _setddayArr={_setddayArr} />
        } />
        <Route path="add" element={
          <AddListComp _ddayArr={_ddayArr} _setddayArr={_setddayArr} />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;