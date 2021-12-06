import React from 'react';

const Comp2 = () => {
  return (
    <>
      <section className="comp2">
        <p>
          기억한 숫자를 입력하고 enter를 누르세요
          <br />
          (정오답이 출력됩니다)
        </p>
        <hr />
        <form>
          <input type="text" />
        </form>
      </section>
    </>
  );
};

export default Comp2;