import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

class Nav extends React.Component {    
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);

        return (
            <nav className="nav">
                <Link to="/">Home</Link>

                {allPages.map((page) => {
                    if (page.slug != 'home') {
                        return (
                            <Link
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