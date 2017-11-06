import alt from 'flux/alt/alt.js';

class PassActions {
    constructor () {
        this.generateActions('read');
    }
}

export default alt.createActions(PassActions);