import './about.css';

class About extends React.Component {
    render () {        
        return (
            <div className="mw7 w-70-l w-70 center pa2 mt4">
                <img src={ require(`./logo.jpg`) } />
                <h2 className="fw7 tracked-tight playfair lh-title black-70 f2 f1-ns">Mission</h2>
                <p className="lh-copy raleway">No Place Like Om is located in Waynesboro, PA and  offers a variety of yoga classes that focus on both strengthening and stretching the body. Our mission is to make yoga accessible to anyone through the use of props and modifications to fit yoga to the student. </p>
            </div>
        );
    }
}

export default About;