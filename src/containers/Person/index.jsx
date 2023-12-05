import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersons } from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value * 1
        const personObj = { id: nanoid(), name, age }
        this.props.addPersons(personObj)
        this.nameNode.value = ""
        this.ageNode.value = ""
    }
    render() {
        return (
            <div>
                <h2>Person组件，上方组件求和为：{this.props.count}</h2>
                <input type="text" ref={c => this.nameNode = c} placeholder="输入名字" />
                <input type="text" ref={c => this.ageNode = c} placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.personArr.map((p => {
                        return <li key={p.id}>{p.name}---{p.age}</li>
                    }))}
                </ul>
            </div>
        )
    }
}
// 建立连接-connect的两个入参是 状态 操作状态的方法  再就是UI组件
export default connect(state => ({ personArr: state.persons, count: state.count }), { addPersons })(Person)


