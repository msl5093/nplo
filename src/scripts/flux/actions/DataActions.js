import axios from 'axios';
import alt from 'flux/alt/alt.js';

class DataActions {
    constructor() {
        const appUrl = 'http://localhost/Zym'; // wp base url

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // wp rest api pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // wp rest api posts
        this.classesEndPoint = `${appUrl}/wp-json/wp/v2/classes`; //wp rest api custom post type => classes
    }

    // method for getting data from the provided endpoint url
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });   
    }

    // method for getting wp pages data
    getPages(cb) {
        this.api(this.pagesEndPoint).then((response) => {
            this.getPosts(response, cb)
        });

        return true;
    }

    // method for getting wp posts data
    getPosts(pages, cb) {
        this.api(this.postsEndPoint).then((response) => {
            const posts     = response
            const payload   = { pages, posts };

            this.getSuccess(payload); // pass returned data to the store
            cb(payload); // this callback will be used for dynamic route building
        });

        return true;
    }

    // method to get custom post type classes
    getAllClasses(cb) {
        this.api(this.pagesEndPoint).then((response) => {
            this.getPosts(response, cb)
        });

        return true;
    }

    // this returns an object with pages and posts data together
    // the alt store will listen for this method to fire and will store the returned data
    getSuccess(payload) {
        return payload;
    }
}

export default alt.createActions(DataActions);