import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

import './footer.css';

class Footer extends React.Component {
    render () {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);

        let year = new Date().getFullYear();

        return (
            <footer className="bg-black fixed bottom-0 w-100">
                <div className="cf ph2-ns">
                    <div className="pa2 tracked">
                        <h2 className="f4-ns f3 moon-gray playfair tracked-tight">No Place Like Om Yoga</h2>
                        <p className="f5 inconsolata"><a href="#" className="no-underline gray">reneerudolphyoga@gmail.com</a></p>
                        <p className="f5 inconsolata"><a href="#" target="_blank" className="no-underline gray">Facebook</a></p>
                        <p className="f5 inconsolata"><a href="#" target="_blank" className="no-underline gray">Instagram</a></p>
                    </div>
                    <div>
                        <p className="f6 moon-gray tc raleway">&copy;{ year } | renee rudolph yoga, llc</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;