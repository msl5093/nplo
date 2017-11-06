import alt from 'flux/alt/alt.js';
import DataActions from 'flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners ({
            // listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods ({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getPageBySlug:  this.getPageBySlug,
            getPostBySlug:  this.getPostBySlug
        });
    }

    // store data returned by getSuccess() from DataActions.js
    handleSuccess (data) {
        this.setState({ data });
    }

    // returns all pages and posts
    getAll () {
        return this.getState().data;
    }

    // returns all pages
    getAllPages () {
        return this.getState().data.pages;
    }

    // returns all posts
    getAllPosts () {
        return this.getState().data.posts;
    }

    // returns page by slug
    getPageBySlug (slug) {
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

    // returns post by slug
    getPostBySlug (slug) {
        const posts = this.getState().data.posts;
        return posts[Object.keys(posts).find((post, i) => {
            return posts[post].slug === slug;
        })] || {};
    }
}

export default alt.createStore(DataStore, 'DataStore');