import Button from 'components/Button/Button.js';

import './yogaClass.css';

class YogaClass extends React.Component {
    constructor () {
        super();

        this.state = {
            title: null,
            date: null,
            totalReg: null,
            maxReg: null
        }
    }

    render () {
        return (
            <div>
                <p>{this.props.title}: {this.props.date} || {this.props.totalReg}/{this.props.maxReg}</p>
                <Button />
            </div>
        )
    }
}

export default YogaClass;