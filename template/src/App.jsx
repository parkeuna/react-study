import { useState } from "react";
import CompBtnContainer from "./components/CompBtnContainer";
import CompOutput from "./components/CompOutput";

const App = () => {
  const [_result, _setResult] = useState('')
  return (
    <>
      <main>
        <h1><img src="./img/title.png" alt="" /></h1>
        <CompOutput _result={_result} />
        <CompBtnContainer _setResult={_setResult} />
      </main>
    </>
  );
};

export default App;