import React, { useEffect, useRef, useState } from 'react';

const CompTimer = ({ ddayObj }) => {
  const [_timer, _setTimer] = useState({})
  const intervalID = useRef()

  const fnTimer = () => {
    let dday = new Date(ddayObj.year, ddayObj.month - 1, ddayObj.date)
    let ddayTimer = dday.getTime() // 1970년부터 dday까지 시간을 밀리세컨드로 구함
    let nowTimer = Date.now()
    let timer = ddayTimer - nowTimer
    /* 
      1일 1시간 1분 1초 => (60*60*24)일 (60*60)시간 (60)분 (1)초 => 86400+3600+60+1 => 90061
      parseInt(90061 / (60*60*24)) = 1일, 일수로 남은 나머지 3661
      parseInt(3661/3600) = 1시간, 시간으로 나눈 나머지 61
      parseInt(61/60) = 1분, 분으로 나눈 나머지 1
      parseInt(1/1) = 1초
    */
    let sec = 1000
    let min = sec * 60
    let hour = min * 60
    let day = hour * 24

    let restDay = parseInt(timer / day) // 일
    let remainDay = timer % day
    let restHour = parseInt(remainDay / hour) // 시간
    let remainHour = remainDay % hour
    let restMin = parseInt(remainHour / min) // 분
    let remainMin = remainHour % min
    let restSec = parseInt(remainMin / sec) // 초
    _setTimer({
      restDay: restDay,
      restHour: restHour,
      restMin: restMin,
      restSec: restSec
    })
    //console.log(restDay,restHour,restMin,restSec);
  }

  useEffect(() => {
    intervalID.current = setInterval(() => { // 태어날 때 (mount)
      fnTimer()
    }, 1000)
    return (() => { // 사라질 때 (unmount)
      clearInterval(intervalID.current)
    })
  }, [])

  return (
    <>
      {
          (_timer.restDay < 0)
          ?
          <p>
            D-day 일정이 지났습니다
          </p>
          :
          <p>
            <span>{_timer.restDay}</span>일&nbsp;
            <span>{_timer.restHour}</span>시간&nbsp;
            <span>{_timer.restMin}</span>분&nbsp;
            <span>{_timer.restSec}</span>초&nbsp;남았습니다
          </p>
      }
    </>
  );
};

export default CompTimer;