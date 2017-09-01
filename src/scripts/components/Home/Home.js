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
        let page = DataStore.getPageBySlug ('home');
        let posts = DataStore.getAllPosts();
        let classes = this.state.classes;

        return (
            <div className="mw8 w-70-l w-80 center raleway pa2 mt4">
                <h1>{ page.title.rendered } component</h1>
            </div>
        );
    }
}

export default Home;