// 引入react核心库
import React from "react";
// 引入reactDOM
import ReactDOM from "react-dom/client";
import store from './redux/store'
import App from "./App.jsx";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
// root.render(<App />);

store.subscribe(() => {
    root.render(<React.StrictMode><App /></React.StrictMode>);
})
export default root;