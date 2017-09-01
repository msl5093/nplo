import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

import './nav.css';

class Nav extends React.Component {    
    constructor() {
        super();

        this.state = {
            loading: true
        }
    }

    componentDidMount () {
        setTimeout (() => this.setState({ 
            loading: false 
        }), 1500);
    }
    
    render () {
        const { loading } = this.setState;

        if (loading) {
            return null;
        }

        let allPages = DataStore.getAllPages();

        return (
            <nav className="tracked pa2 tr raleway bg-black">
                <Link to="/" className="fl link moon-gray playfair tracked-tight f4 f3-ns nt1">NPLO</Link>
                <Link to="/" className="link moon-gray">Home</Link>

                { allPages.map((page) => {
                    if (page.slug != 'home') {
                        return (
                            <Link
                                className="pl2 link moon-gray"
                                key = { page.id }
                                to = { `/${page.slug}` }
                            >
                                { page.title.rendered }
                            </Link>
                        )
                    }
                }) }

            </nav>
        );
    }
}

export default Nav;