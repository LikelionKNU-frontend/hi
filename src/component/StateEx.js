import React, { useState } from 'react';

// const heavyWork = () => {
//     console.log('1번째 렌더링');
//     return ['진형', '승준', '정빈'];
// }


function StateEx() {
    const [names, setNames] = useState(['진형', '승준','정빈']);

    console.log('ss');
    //  맨 처음 렌더링 때만 보여지게됨.
    // 콜백 함수 사용
    // const [names, setNames] = useState(() => {
    //     return heavyWork();
    // });

    // const [names, setNames] = useState(heavyWork());

    
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);  
    };

    //console.log(input);

    const handleUpload = () => {
        //콜백 함수
        setNames((prevState) => {
            console.log("이전", prevState);
            //새로운 상태
            // input, 이전 값
            return [input,...prevState]; 
        });    
    };

    return (
        <div>
            <input 
              type="text" 
              value={input} 
              onChange={handleInputChange}
            />


            <button onClick={handleUpload}>
              추가
            </button>
            {names.map((name, idx) => (
                <p key={idx}>{name}</p>
            ))}
        </div>
    );
} 

export default StateEx;