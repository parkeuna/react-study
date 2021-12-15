import { useState } from "react";
import CompBtnContainer from "./components/CompBtnContainer";
import CompOutput from "./components/CompOutput";

const App = () => {
  const [_result, _setResult] = useState('')
  return (
    <>
      <main>
        <CompOutput _result={_result} />
        <CompBtnContainer _setResult={_setResult} />
      </main>
    </>
  );
};

export default App;