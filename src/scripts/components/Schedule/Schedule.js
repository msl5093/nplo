import DataStore from 'flux/stores/DataStore.js';

import './schedule.css';

class Schedule extends React.Component {
    render () {
        let page = DataStore.getPageBySlug('schedule');
        
        return (
            <div className="mw8 w-70-l w-80 center raleway pa2 mt4">
                <h1>{ page.title.rendered } component</h1>
            </div>
        );
    }
}

export default Schedule;