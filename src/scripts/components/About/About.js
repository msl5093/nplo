import DataStore from 'flux/stores/DataStore.js';

import './about.css';

class About extends React.Component {
    render () {
        let page = DataStore.getPageBySlug('about');
        
        return (
            <div className="mw8 w-70-l w-80 center raleway pa2 mt4">
                <h1>{ page.title.rendered } component</h1>
            </div>
        );
    }
}

export default About;