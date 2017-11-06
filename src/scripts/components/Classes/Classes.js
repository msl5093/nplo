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
        classes = _.sortBy(classes, [(c) => { return c.title.rendered; }]);

        return (
            <div className="mw7 w-70-l w-70 center raleway pa2 mt3">   
                <div className="pb3">
                    <h2 className="fw7 yellowtail lh-title black-70 f2 f1-ns">Classes & Pricing</h2>
                    { classes.map((c) => {
                        return (
                            <div key={ c.id }>
                                <h2 className="yellowtail">{ c.title.rendered }</h2>
                                <p>{ c.content.rendered }</p>
                                <p>{ c.price }</p>
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }
}

export default Classes;