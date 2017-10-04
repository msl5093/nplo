import * as $ from 'axios';
import alt from 'flux/alt/alt.js';
import WpPostActions from 'flux/actions/WpPostActions.js';

class WpPostStore {
    constructor () {
        this.bindActions (WpPostActions);
        this.posts = [];
    }

    read () {
        let _this = this;
        const posts = this.posts;

        $.get('https://www.noplacelikeom-pa.com/wp-json/wp/v2/posts')
            .then((response) => {
                let allPosts = response.data;
                _this.setState({
                    posts : posts.concat(allPosts)
                })
            });
    }
}

export default alt.createStore(WpPostStore, 'WpPostStore');