import CompBtnContainer from "./components/CompBtnContainer";
import CompOutput from "./components/CompOutput";
import { btnArr } from "./module/data";

const App = () => {
  return (
    <>
      <main>
        <CompOutput />
        <CompBtnContainer />
      </main>
    </>
  );
};

export default App;