import * as $ from 'axios';
import alt from 'flux/alt/alt.js';
import ClassActions from 'flux/actions/ClassActions.js';

class ClassStore {
    constructor () {
        this.bindActions (ClassActions);
        this.classes = [];
    }

    read () {
        let _this = this;
        const classes = this.classes;

        $.get('https://www.noplacelikeom-pa.com')
            .then((response) => {
                let allClasses = response.data;
                _this.setState({
                    classes : classes.concat(allClasses)
                })
            });
    }
}

export default alt.createStore(ClassStore, 'ClassStore');