import * as $ from 'axios';
import alt from 'flux/alt/alt.js';
import WpPageActions from 'flux/actions/WpPageActions.js';

class WpPageStore {
    constructor () {
        this.bindActions (WpPageActions);
        this.pages = [];
    }

    read () {
        let _this = this;
        const pages = this.pages;

        $.get('http://localhost/Zym/wp-json/wp/v2/pages')
            .then((response) => {
                let allPages = response.data;
                _this.setState({
                    pages : pages.concat(allPages)
                })
            });
    }
}

export default alt.createStore(WpPageStore, 'WpPageStore');