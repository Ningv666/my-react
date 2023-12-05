import React, { Component, Fragment } from 'react';
import Demo from './containers/Count';
import Person from './containers/Person'
class App extends Component {
    onClick = (value) => {
        console.log('点击了', value);
    }
    render() {
        return (
            // <BrowserRouter>
            <Fragment>
                <Demo />
                <hr />
                <Person />
            </Fragment>
            // </BrowserRouter>
        );
    }
}

export default App;
