import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import Nav from 'components/Nav/Nav.js';
import Header from 'components/Header/Header.js';
import Home from 'components/Home/Home.js';
import About from 'components/About/About.js';
import Register from 'components/Register/Register.js';
import Schedule from 'components/Schedule/Schedule.js';
import Classes from 'components/Classes/Classes.js';
import Faq from 'components/Faq/Faq.js';
import Footer from 'components/Footer/Footer.js';

// import tachyons globally
import '../../node_modules/tachyons/css/tachyons.css';

// global stylsheet for reusable styles
import '../global.css';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

class AppInit {
    templates = {
        'about': About,
        'schedule': Schedule,
        'classes': Classes,
        'faq': Faq
    }

    buildRoutes (data) {
        return data.pages.map((page, i) => {
            return(
                <Route 
                    key = { i }
                    component = { this.templates[page.slug] }
                    path = { `/${page.slug}` }
                    exact
                />
            )
        });
    }

    run() {
        DataActions.getPages((response) => {
            render (
                <Router>
                    <div className="wrapper">
                        <div className="content">
                            <Nav />  
                            <Header />
                            <Switch>
                                <Route path="/" component={ Schedule } exact />
                                { this.buildRoutes(response) }
                                <Route render={ () => { return <Redirect to="/" /> } } />
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>, document.getElementById('app')
            )
        });
    }
}

new AppInit().run();