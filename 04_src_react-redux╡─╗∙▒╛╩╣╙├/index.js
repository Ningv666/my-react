// 引入react核心库
import React from "react";
// 引入reactDOM
import ReactDOM from "react-dom/client";
import store from './redux/store'
import { Provider } from "react-redux";
import App from "./App.jsx";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>);
// root.render(<App />);

// 监测redux中的状态的改变，保证状态改变页面也会相应的渲染
// store.subscribe(() => {
//     root.render(<React.StrictMode><App /></React.StrictMode>);
// })
export default root;