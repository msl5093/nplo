import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="mw8 w-70-l w-80 center outline raleway pa2 mt4">
                <h2 className="f4 fw5 pa2">
                    <span className="f2 f3-ns fw7 tracked-tight">Renee Rudolph</span><br />
                    is a certified yoga instructor and teacher.
                </h2>
            </div>
        )
    }
}

export default Header;