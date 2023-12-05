import React, { Component, Fragment } from 'react';
import RouterExercise from './components/RouterExercise';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import SetState from './components/1_setState';
import LazyLoad from './components/2_lazyload'
import Demo from './components/Count';
class App extends Component {
    onClick = (value) => {
        console.log('点击了', value);
    }
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header title="这是头部文件" click={this.onClick} />
                    <RouterExercise />
                    <SetState />
                    <LazyLoad />
                    <Demo />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
