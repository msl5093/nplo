import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

import './footer.css';

class Footer extends React.Component {
    render () {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]);

        let year = new Date().getFullYear();

        return (
            <footer className="bg-dark-gray w-100 mt6">
                <div className="mw9 w-90-l w-90-ns center pt3">
                    <div id="footer-contact">
                        <h2 className="f4 moon-gray tc yellowtail fw4 pb3">
                            No Place Like Om
                        </h2>
                        <p className="f6 moon-gray tc raleway nt3">
                            Yoga & Meditation
                        </p>
                        <p className="f6 moon-gray tc raleway nt3">
                            10 E Main Street
                        </p>
                        <p className="f6 moon-gray tc raleway nt3">
                            Waynesboro, PA 17268
                        </p>
                        <p className="f7 moon-gray tc raleway nt3">
                            717-576-6466
                        </p>

                        <ul className="list pl0 tc">
                            <li className="pa1 raleway di">
                                <a href="mailto:noplacelikeom.pa@gmail.com?subject=Contact Us" className="no-underline moon-gray">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="pa1 raleway di">
                                <a href="https://www.facebook.com/reneerudolphyoga/" target="_blank" className="no-underline moon-gray">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="pa1 raleway di">
                                <a href="https://www.instagram.com/zen_yama_mama/" target="_blank" className="no-underline moon-gray">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="footer-copyright">
                        <p className="f7 moon-gray tc raleway">&copy;{ year } | no place like om pa, llc</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;