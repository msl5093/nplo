import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

import './nav.css';

class Nav extends React.Component {    
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);

        return (
            <nav className="tracked pa2 tr raleway bg-black">
                <Link to="/" className="link moon-gray">Home</Link>

                {allPages.map((page) => {
                    if (page.slug != 'home') {
                        return (
                            <Link
                                className="pl2 link moon-gray"
                                key = {page.id}
                                to = {`/${page.slug}`}
                            >
                                {page.title.rendered}
                            </Link>
                        )
                    }
                })}
            </nav>
        )
    }
}

export default Nav;