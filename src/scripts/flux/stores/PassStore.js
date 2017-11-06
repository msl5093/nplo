import * as $ from 'axios';
import alt from 'flux/alt/alt.js';
import PassActions from 'flux/actions/PassActions.js';

class PassStore {
    constructor () {
        this.bindActions (PassActions);
        this.passes = [];
    }

    read () {
        let _this = this;
        const passes = this.passes;
        
        $.get('http://localhost/Zym/wp-json/wp/v2/passes')
            .then((response) => {
                let allPasses = response.data;
                _this.setState({
                    passes: passes.concat(allPasses)
                });
            });
    }
}

export default alt.createStore(PassStore, 'PassStore');