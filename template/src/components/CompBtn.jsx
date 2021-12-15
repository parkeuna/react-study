import { fnSetResult } from "../module/fnSetResult";

const CompBtn = ({ btnDataObj, _setResult }) => {

  const fnChangeResult = (e) => {
    e.preventDefault()
    _setResult(
      fnSetResult(e)
    )
  }
  return (
    <button
      onClick={fnChangeResult}
      data-fn={btnDataObj.fn}
      data-char={btnDataObj.id}
    >
      <img src={`./img/${btnDataObj.src}.png`} alt="" />
    </button>
  );
};

export default CompBtn;