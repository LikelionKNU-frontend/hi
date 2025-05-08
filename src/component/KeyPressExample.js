import React, { useState } from "react";

function KeyPressExample() {
  const [keyPressed, setKeyPressed] = useState("");

  const handleKeyDown = (e) => {
    setKeyPressed(`눌린 키: ${e.key}`);
  };

  return (
    <div>
      <h2>아래 입력창에서 키보드를 눌러보세요</h2>
      <input type="text" onKeyDown={handleKeyDown} placeholder="여기에 키 입력" />
      <p>{keyPressed}</p>
    </div>
  );
}

export default KeyPressExample;
