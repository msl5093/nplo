import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import YogaClass from 'components/YogaClass/YogaClass.js';
import Button from 'components/Button/Button.js';

import alt from 'flux/alt/alt.js';

import './schedule.css';

class Schedule extends React.Component {
    render () {
        return (
            <div className="mw8 w-80-l w-80 center raleway pa2 mt4">                
                <div className="iframe-container">
                    <iframe name="frame2" src="https://app.punchpass.com/org/4061/classes?embed=true" height="700" width="100%"></iframe> 
                </div>
            </div>
        );
    }
}

export default Schedule;