import React from 'react';

const CompBtns = ({fn}) => {
  return (
    <>
      <button data-increase='-1' onClick={fn}>-</button>
      &nbsp;
      <button data-increase='1' onClick={fn}>+</button>
    </>
  );
};

export default CompBtns;