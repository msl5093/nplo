import alt from 'flux/alt/alt.js';

class ClassActions {
    constructor () {
        this.generateActions('read');
    }
}

export default alt.createActions(ClassActions);