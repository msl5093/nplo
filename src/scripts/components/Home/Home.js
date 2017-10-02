import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import alt from 'flux/alt/alt.js';

import './home.css';

class Home extends React.Component {
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
        return (
            <div className="mw7 w-70-l w-70 center raleway pa2 mt4">
                
            </div>
        );
    }
}

export default Home;