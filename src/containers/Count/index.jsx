/**
 * 容器组件
 */
// 引入store
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'
class Count extends Component {
    state = {}

    increment = () => {
        const { value } = this.selectNumber
        this.props.add(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) { this.props.add(value * 1) }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            this.props.add(value * 1)
        }, 500);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>当前求和为：{this.props.count},以下添加的人数是：{this.props.personNums}</div>
                <select ref={c => this.selectNumber = c}>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和的奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

// 建立连接 并暴露一个容器组件
export default connect(state => ({ count: state.count,personNums:state.persons.length }), { add: createIncrementAction, jian: createDecrementAction })(Count)
