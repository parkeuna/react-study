import { btnArr } from "../module/data";
import CompBtn from "./CompBtn";

const CompBtnContainer = ({ _setResult }) => {
  return (
    <form className='btnContainer'>
      {
        btnArr.map((btnDataObj) => {
          return (
            <CompBtn
              key={btnDataObj.id}
              btnDataObj={btnDataObj}
              _setResult={_setResult}
            />
          )
        })
      }
    </form>
  );
};

export default CompBtnContainer;