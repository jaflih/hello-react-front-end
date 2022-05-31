import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHelloDispatcher } from './helloworld/hello';

export default function HelloWorld() {
  const dispatch = useDispatch();

  const hello = useSelector((state) => state.helloReducer.greeting || '');

  const handleClick = () => {
    dispatch(getHelloDispatcher());
  };

  return (
    <>
      <h1>
        {' '}
        Greeting:
        {hello}
      </h1>
      <button className="helloBtn" onClick={handleClick} type="submit">
        Get Random
      </button>
    </>
  );
}
