import PassStore from 'flux/stores/PassStore.js';
import PassActions from 'flux/actions/PassActions.js';

import Button from 'components/Button/Button.js';

import alt from 'flux/alt/alt.js';

import './passes.css';

class Passes extends React.Component {
    constructor () {
        super();
        this.state = PassStore.getState();
    }

    componentDidMount () {
        PassStore.listen(this.storeChanged);
        PassActions.read();
    } 

    componentWillUnmount () {
        PassStore.unlisten(this.storeChanged);
        alt.recycle(PassStore);
    }

    storeChanged = (state) => {
        this.setState(state);
    }

    render () {
        let passes = this.state.passes;
        passes = _.sortBy(passes, [(p) => { return p.price; }]);

        return (
            <div className="mw7 w-70-l w-70 center raleway pa2 mt3">   
                <div className="pb3">
                    <h2 className="fw7 yellowtail lh-title black-70 f2 f1-ns">Class Passes</h2>
                    { passes.map((p) => {
                        return (
                            <div key={ p.id }>
                                <h2 className="yellowtail">{ p.title.rendered }</h2>
                                <p>{ p.price }</p>
                                <p>{ p.content.rendered }</p>
                                <Button type={ 'button' } text={ 'Purchase' } handleClick={ () => { window.open(p.link, '_blank') } } />
                            </div>
                        );
                    }) }
                </div>
            </div>
        )
    }
}

export default Passes;