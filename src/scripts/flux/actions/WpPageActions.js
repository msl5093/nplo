import alt from 'flux/alt/alt.js';

class WpPageActions {
    constructor () {
        this.generateActions('read');
    }
}

export default alt.createActions(WpPageActions);