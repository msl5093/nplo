import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import alt from 'flux/alt/alt.js';

import './welcome.css';

class Welcome extends React.Component {
    render () {
        let page = DataStore.getPageBySlug('welcome');

        return (
            <div className="mw7 w-70-l w-70 center pa2 mt4">
                <h2 className="fw7 yellowtail lh-title black-70 f2 f1-ns">{ page.title.rendered }</h2>
                <p className="lh-copy raleway">{ page.content.rendered }</p>
            </div>
        );
    }
}

export default Welcome;