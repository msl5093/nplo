import DataStore from 'flux/stores/DataStore.js';

import './home.css';

class Home extends React.Component {
    render () {
        let page = DataStore.getPageBySlug('home');
        let posts = DataStore.getAllPosts();

        return (
            <div className="mw8 w-70-l w-80 center raleway pa2 mt4">
                <h1>{ page.title.rendered } component</h1>
                
                { posts.map((post) => {
                    return (
                        <p key = { post.id }>
                            { post.title.rendered }
                        </p>
                    );
                }) }

            </div>
        );
    }
}

export default Home;