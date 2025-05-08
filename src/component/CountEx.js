import React, { useState } from 'react';

function CountEx() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

	console.log("업데이트");
	
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={()=>setCount(count-1)}>감소</button>
    </div>
  );
} 

export default CountEx;