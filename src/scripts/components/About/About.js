import DataStore from 'flux/stores/DataStore.js';

import './about.css';

class About extends React.Component {
    render () {     
        let post = DataStore.getPostBySlug('about');
        
        return (
            <div className="mw7 w-70-l w-70 center pa2 mt4">
                <h2 className="fw7 yellowtail lh-title black-70 f2 f1-ns">{ post.title.rendered }</h2>
                <p className="lh-copy raleway">{ post.content.rendered }</p>
            </div>
        );
    }
}

export default About;