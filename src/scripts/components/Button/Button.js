import './button.css';

class Button extends React.Component {
    constructor () {
        super();

        this.state = {
            disabled: false,
            handleClick: null
        }
    }

    render () {
        return (
            <button disabled={ this.props.disabled } onClick={ this.props.handleClick }>Signup</button>
        )
    }
}

export default Button;