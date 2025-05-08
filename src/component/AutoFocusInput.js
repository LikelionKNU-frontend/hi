import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    // 마운트되자마자 input에 포커스
    inputRef.current.focus();
  }, []);

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}`);
        inputRef.current.focus();
    }
  return (
    <div>
          <input ref={inputRef} placeholder="자동 포커스 됩니다!" />
          <button onClick={login}>로그인</button>
    </div>
  );
}

export default AutoFocusInput;