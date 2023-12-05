
import PubSub from 'pubsub-js'
export default function index(props) {
    console.log(props);
    let handleClick = (value) => {
        props.click(value);
        PubSub.publish('MY TOPIC', '兄弟你好');

    }
    return (
        <div onClick={() => { handleClick(1) }}> {props.title}</div>
    )
}
