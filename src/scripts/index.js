import { render } from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';

import Home from 'components/Home.js';
import About from 'components/About.js';

import Header from 'components/Header/Header.js';
import Nav from 'components/Nav/Nav.js';
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
        'about': About
    }

    buildRoutes(data) {
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
            render(
                <Router>
                    <div>
                        <Nav />                        
                        <Switch>
                            <Route path="/" component={ Home } exact />
                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch>
                        <Header />
                        <Footer />
                    </div>
                </Router>, document.getElementById('app')
            )
        });
    }
}

new AppInit().run();