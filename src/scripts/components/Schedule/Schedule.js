import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import YogaClass from 'components/YogaClass/YogaClass.js';
import Button from 'components/Button/Button.js';

import alt from 'flux/alt/alt.js';

import './schedule.css';

class Schedule extends React.Component {
    constructor () {
        super();
        this.state = ClassStore.getState();

        this.state = {
            loading: "Loading..."
        }
    }

    componentDidMount () {
        ClassStore.listen(this.storeChanged);
        ClassActions.read();
        this.state.loading = "";
    }

    componentWillUnmount () {
        ClassStore.unlisten(this.storeChanged);
        alt.recycle(ClassStore);
    }

    storeChanged = (state) => {
        this.setState(state);
    }

    classReg() {
        alert('signup for class');
    }

    render () {
        let page = DataStore.getPageBySlug('schedule');
        let classes = this.state.classes;
        classes = _.sortBy(classes, [(c) => { return c.acf.date; }]);
        
        return (
            <div className="mw7 w-70-l w-70 center raleway pa2 mt4">
                <h1>{ page.title.rendered } component</h1>
                
                <h2>{ this.state.loading }</h2>

                { classes.map((c) => {
                    return (                                 
                        <div key={ c.id } className="pa2 mb2 outline">
                            <YogaClass title={ c.title.rendered } date={ c.acf.date } totalReg={ c.acf.total_registration } maxReg={ c.acf.max_registration } />        
                            <Button disabled={ c.acf.max_registration - c.acf.total_registration <= 0 } handleClick={ this.classReg } />
                        </div>
                    );
                }) }

            </div>
        );
    }
}

export default Schedule;