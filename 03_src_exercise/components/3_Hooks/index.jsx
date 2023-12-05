import React from 'react';
import root from '../../index'
import Button from '@mui/material/Button';
export default function Demo() {
    let [count, setCount] = React.useState(0)
    function add() {
        // setCount(count + 1)//1.第一种写法
        setCount(count => count + 1)//2.第二种写法

    }
    const myRef = React.useRef();

    React.useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => {
            console.log('@');
        }
    }, [])
    function unmount() {
        root.unmount();
    }
    function show() {
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type="text"  ref={myRef}/>
            <h2>当前的求和为：{count}</h2>
            <Button sx={{ marginBottom: 2 }} variant="outlined" onClick={add}>点我+1</Button>
            <Button sx={{ marginBottom: 2 }} variant="outlined" onClick={unmount}>卸载组件</Button>
            <Button sx={{ marginBottom: 2 }} variant="outlined" onClick={show}>点我显示输入的文字</Button>

        </div>
    )
}
