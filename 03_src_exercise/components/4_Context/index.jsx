import React, { Component } from 'react';
import './index.css';

// 创建context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext
class A extends Component {
    state = { userName: 'Tom' }

    render() {
        const { userName } = this.state;
        return (
            <div className="grand">
                <h1>我是A组件，{userName}</h1>
                <Provider value={userName}><B /></Provider>

            </div>
        );
    }
}

class B extends Component {

    render() {
        return (
            <div className="father">
                <h1>我是B组件，我爸是{this.props.userName}</h1>
                <C />
            </div>
        );
    }
}

// class C extends Component {
//     static contextType = MyContext;
//     render() {
//         return (
//             <div className='son'>
//                 <h1>我是C组件，我爷爷是{this.context}</h1>
//             </div>
//         );
//     }
// }

const C = () => {
    return (
        <div>
            <div className='son'>
                <h1>我是C组件，我爷爷是: 
                <Consumer>
                    {value => value}
                </Consumer> </h1>
            </div>
        </div>
    );
}


export default A;