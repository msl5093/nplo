import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import YogaClass from 'components/YogaClass/YogaClass.js';

import alt from 'flux/alt/alt.js';

import './schedule.css';

class Schedule extends React.Component {
    constructor () {
        super();
        this.state = ClassStore.getState();
    }

    componentDidMount () {
        ClassStore.listen(this.storeChanged);
        ClassActions.read();
    }

    componentWillUnmount () {
        ClassStore.unlisten(this.storeChanged);
        alt.recycle(ClassStore);
    }

    storeChanged = (state) => {
        this.setState(state);
    }

    render () {
        let page = DataStore.getPageBySlug('schedule');
        let classes = this.state.classes;
        classes = _.sortBy(classes, [(c) => { return c.acf.date; }]);
        
        return (
            <div className="mw8 w-70-l w-80 center raleway pa2 mt4">
                <h1>{ page.title.rendered } component</h1>
                
                { classes.map((c) => {
                    return ( 
                        //<span className="fw7">{ c.title.rendered }:</span>{ c.acf.date } { c.acf.total_registration }/{ c.acf.max_registration }                                
                        <div key={ c.id }>
                            <YogaClass title={ c.title.rendered } date={ c.acf.date } totalReg={ c.acf.total_registration } maxReg={ c.acf.max_registration }/>
                        </div>
                    );
                }) }

            </div>
        );
    }
}

export default Schedule;