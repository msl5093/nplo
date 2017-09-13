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
                <p className="fw7">{ this.props.title }: <span className="fw5">{ this.props.date }</span></p>
                <p>{ this.props.totalReg }/{ this.props.maxReg }</p>
            </div>
        )
    }
}

export default YogaClass;