import alt from 'flux/alt/alt.js';

class WpPostActions {
    constructor () {
        this.generateActions('read');
    }
}

export default alt.createActions(WpPostActions);