import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import alt from 'flux/alt/alt.js';

import './classes.css';

class Classes extends React.Component {
    render () {
        return (
            <div className="mw8 w-80-l w-80 center raleway pa2 mt3">   
                <div className="pb3">
                    <h2 className="fw7 scriptoramaJf lh-title black-70 f2 f1-ns">Classes & Pricing</h2>
                    
                    <h2 className="scriptoramaJf">Gentle Yoga</h2>
                    <p>
                        This class will use props and chairs to gently move into poses and will be focused on alignment and finding ease in each pose.
                    </p>

                    <h2 className="scriptoramaJf">Vinyasa Flow Yoga</h2>
                    <p>
                        Vinyasa means to link breath with movement. This flow yoga will focus on flowing though poses with focus on both strengthening and lengthening. Any level.
                    </p>

                    <h2 className="scriptoramaJf">Intro to Yoga</h2>
                    <p>
                    This class will focus on the fundamentals of yoga such as pose breakdowns, going through several variations of poses, and will offer alignment assistance. This class is not simply for beginners, but anyone who wishes to deepen their practice.
                    </p>
                </div>   
            </div>
        );
    }
}

export default Classes;