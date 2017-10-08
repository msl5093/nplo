import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import alt from 'flux/alt/alt.js';

import './classes.css';

class Classes extends React.Component {
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
        let classes = this.state.classes;
        classes = _.sortBy(classes, [(c) => { return c.acf.name; }]);

        return (
            <div className="mw8 w-80-l w-80 center raleway pa2 mt3">   
                <div className="mw8 w-80-l w-80 center pb3">
                    <h3>
                        Please find class descriptions and prices listed below. Class passes are available for <a href='https://app.punchpass.com/org/4061/passes/28463' target='_blank'>single</a>** classes as well as passes for <a href='https://app.punchpass.com/org/4061/passes/28461' target='_blank'>five</a> and <a href='https://app.punchpass.com/passtypes/28462' target='_blank'>ten</a> classes.
                    </h3>
                    <h3>All standard class offerings are $10.00 for a <a href='https://app.punchpass.com/org/4061/passes/28463' target='_blank'>single</a>** class.</h3>
                    <p className="f6">
                        Browse all <a href='https://app.punchpass.com/org/4061/passes' target=''>passes</a> available for purchase. Payment may be rendered prior to or after services. Paying online ahead of time saves time and is apprecaited when possible.
                    </p>
                    <p className="pb4 f6">
                        **Single class passes are simply a way to pay ahead of time when planning to attend a single class. Payment may always be provided prior to or after a class via credit card, cash, or personal check. Single class passes provide an easy way to purchase single classes online ahead of time.
                    </p>
                                
                { classes.map((c) => {
                    return (                            
                        <div key={ c.id }>
                            <div className="mw7 w-70-l w-80 center pb3">
                                <h2 className="playfair">{ c.acf.name }</h2>
                                <p>{ c.acf.description }</p>
                                <p>{ c.acf.price }</p>
                            </div>
                        </div>
                    );
                }) }
                    
                </div>   
            </div>
        );
    }
}

export default Classes;