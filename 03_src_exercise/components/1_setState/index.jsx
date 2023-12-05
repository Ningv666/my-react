import React, { Component } from 'react';
import Button from '@mui/material/Button';
class Index extends Component {
    state = {
        count: 0
    }
    add = () => {
        // 1.对象式使用setState
        // let { count } = this.state;
        // this.setState({ count: ++count }, () => {
        //     console.log(this.state.count);//虽然setState的执行是同步的但是渲染页面是异步的
        // })
        // 2.函数式的setState
        this.setState(state => ({ count: state.count + 1 }))
    }
    render() {
        return (
            <div>

                <h2>当前的求和为：{this.state.count}</h2>
                <Button sx={{ marginBottom: 2 }} variant="outlined" onClick={this.add}>+1</Button>

            </div >
        );
    }
}

export default Index;
