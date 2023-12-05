import React from "react";

export default class Weather extends React.Component {
    state = { iSHot: true };

    render() {
        let { iSHot } = this.state;
        return <h1 onClick={this.changeWeather}>{this.props.address},Today is {iSHot ? "热" : "不热"}</h1>
    }
    changeWeather = () => {
        this.setState({ iSHot: !this.state.iSHot });
    }

    componentDidMount() {
        console.log('这componentDidMount');
    }

    componentDidUpdate() {
        console.log('comnponentDidUpdate');
    }
}


// export default function Weather(props) {
//     return <h1>{props.address},Today is hot </h1>
// }
