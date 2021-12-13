import { btnArr } from "../module/data";

const CompBtnContainer = () => {
  return (
    <form className='btnContainer'>
      {
        btnArr.map((v) => {
          return (
            <button key={v.id} className={`${v.fn} ${v.id}`}>
              {v.char}
            </button>
          )
        })
      }
    </form>
  );
};

export default CompBtnContainer;