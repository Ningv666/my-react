/**
 * 容器组件
 */
// 引入Count的UI组件
import CountUI from '../../components/Count';
// 引入store
import { connect } from 'react-redux';
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'
// mapStateToProps函数的返回值作为状态传递给了UI组件的props-状态
// function mapStateToProps(state) {
//     return { count: state }
// }
// mapDispatchToProps函数的返回值作为状态传递给了UI组件的props-操作状态的方法
// function mapDispatchToProps(dispatch) {
//     return {
//         add: num =>
//             dispatch(createIncrementAction(num)),
//         jian: num => dispatch(createDecrementAction(num))

//     }
// }

// 建立连接 并暴露一个容器组件
export default connect(state => ({ count: state }), { add: createIncrementAction, jian: createDecrementAction })(CountUI)

