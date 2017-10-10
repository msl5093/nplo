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
            <div className="w-100">
                <nav className="w-100 tracked pa2 tr raleway bg-dark-gray">
                    <Link to="/" className="fl link moon-gray scriptoramaJf f4 f3-ns nt1 pb2">No Place Like Om</Link>

                    { allPages.map((page) => {
                        if (page.slug != 'home') {
                            return (
                                <Link
                                    className="f5 link moon-gray pr3"
                                    key = { page.id }
                                    to = { `/${page.slug}` }
                                >
                                    { page.title.rendered }
                                </Link>
                            )
                        }
                    }) }

                </nav>
            </div>
        );
    }
}

export default Nav;