import './button.css';

class Button extends React.Component {
    constructor (props) {
        super(props);   
    }

    render () {
        return (
            <button className="white bg-dark-gray pa1" type={ this.props.type } onClick={ this.props.handleClick }>{ this.props.text }</button>
        )
    }
}

export default Button;