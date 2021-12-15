let str = ''

export const fnSetResult = (e) => {
  let fn = e.currentTarget.getAttribute('data-fn')
  
  switch (fn) {
    case 'change':
      let char = e.currentTarget.getAttribute('data-char')
      str = str + char
      return str
    case 'delete':
      str = str.slice(0, -1)
      return str
    case 'clear':
      str = ''
      return str
    case 'calc':
      try {
        let fnCalc = new Function('return ' + str)
        str = String(fnCalc()) //2
        return str
      } catch {//에러가 발생하면 실행
        alert('계산식오류')
        return str
      }
  }
}