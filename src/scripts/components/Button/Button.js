import './button.css';

class Button extends React.Component {
    constructor () {
        super();

        this.state = {
            disabled: false
        }
    }

    render () {
        return (
            <button>Signup</button>
        )
    }
}

export default Button;