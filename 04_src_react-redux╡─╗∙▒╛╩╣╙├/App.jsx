import React, { Component, Fragment } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Demo from './containers/Count';
// import store from './redux/store';

class App extends Component {
    onClick = (value) => {
        console.log('点击了', value);
    }
    render() {
        return (
            // <BrowserRouter>
            <Fragment>
                <Header title="这是头部文件" click={this.onClick} />
                <Demo />
            </Fragment>
            // </BrowserRouter>
        );
    }
}

export default App;
