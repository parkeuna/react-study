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
      className={btnDataObj.fn}
      data-fn={btnDataObj.fn}
      data-char={btnDataObj.id}
    >
      {btnDataObj.char}
    </button>
  );
};

export default CompBtn;