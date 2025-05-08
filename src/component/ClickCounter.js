import React, { useRef, useState } from 'react';

function ClickCounter() {
  // 렌더링을 강제로 발생시키기 위한 상태값
  const [renderer, setRenderer] = useState(0);

  // useRef: 렌더링 사이에 값이 유지됨, 변경돼도 렌더링 발생 안 함
  const countRef = useRef(0);

  // 일반 변수: 함수 다시 실행될 때마다 초기화됨 (렌더링되면 0으로 리셋됨)
  let countVar = 0;

  // 강제로 렌더링을 발생시키는 함수
  const doRendering = () => {
    setRenderer(renderer + 1); // 상태값을 바꾸면 리렌더링 발생
  };


  const increaseRef = () => {
    countRef.current += 1;
    console.log('Ref : ', countRef.current);
  };

  // 렌더링 시 다시 0
  const increaseVar = () => {
    countVar += 1;
    console.log('Var : ', countVar);
  };

  return (
    <div>

      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>


      <button onClick={doRendering}>렌더링</button>

      <button onClick={increaseRef}>Ref버튼</button>

      <button onClick={increaseVar}>Var버튼</button>
    </div>
  );
}

export default ClickCounter;
