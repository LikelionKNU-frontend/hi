import React, { useState , useEffect } from 'react';


function EffectEx() {
  
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    //함수 실행 count + 1
    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 렌더링 될때마다 매번 실행
    // 화면이 렌더링된 직후에 불리게 되는 것
    useEffect(() => {
        // ...
        console.log("ss");
    });

    //마운트, 배열 변경될 때만 실행
    useEffect(() => {
        // ...
        console.log("count!!!");
    }, [count]);

    useEffect(() => {
        // ...
        console.log("name?????");
    }, [name]);


    // 처음만 렌더링
    useEffect(() => {
        // ...
        console.log("1번째!!");
    }, []);

    return (
        <div>
            <button onClick={handleCountUpdate}>업데이트</button>
            <span>count:{count}</span><br/>
            <input type="text" value={name} onChange={handleInputChange}/>
            <span>이름 : {name}</span>
        </div>
    );
} 

export default EffectEx;