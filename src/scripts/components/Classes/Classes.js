import DataStore from 'flux/stores/DataStore.js';
import ClassActions from 'flux/actions/ClassActions.js';
import ClassStore from 'flux/stores/ClassStore.js';

import alt from 'flux/alt/alt.js';

import './classes.css';

class Classes extends React.Component {
    render () {
        return (
            <div className="mw8 w-80-l w-80 center raleway pa2 mt3">   
                <div className="mw8 w-80-l w-80 center pb3">
                    <h3>
                        Please find class descriptions and prices listed below. Class passes are available for <a href='https://app.punchpass.com/org/4061/passes/28463' target='_blank'>single</a>** classes as well as passes for <a href='https://app.punchpass.com/org/4061/passes/28461' target='_blank'>five</a> and <a href='https://app.punchpass.com/passtypes/28462' target='_blank'>ten</a> classes.
                    </h3>
                    <h3>All standard class offerings are $10.00 for a <a href='https://app.punchpass.com/org/4061/passes/28463' target='_blank'>single</a>** class.</h3>
                    <p className="f6">
                        Browse all <a href='https://app.punchpass.com/org/4061/passes' target=''>passes</a> available for purchase. Payment may be rendered prior to or after services. Paying online ahead of time saves time and is apprecaited when possible.
                    </p>
                    <p className="pb4 f6">
                        **Single class passes are simply a way to pay ahead of time when planning to attend a single class. Payment may always be provided prior to or after a class via credit card, cash, or personal check. Single class passes provide an easy way to purchase single classes online ahead of time.
                    </p>

                    <h2 className="playfair">Gentle Yoga</h2>
                    <p>
                        This class will use props and chairs to gently move into poses and will be focused on alignment and finding ease in each pose.
                    </p>
                    <p>$10.00</p>

                    <h2 className="playfair">Vinyasa Flow Yoga</h2>
                    <p>
                        Vinyasa means to link breath with movement. This flow yoga will focus on flowing though poses with focus on both strengthening and lengthening. Any level.
                    </p>
                    <p>$10.00</p>

                    <h2 className="playfair">Intro to Yoga</h2>
                    <p>
                    This class will focus on the fundamentals of yoga such as pose breakdowns, going through several variations of poses, and will offer alignment assistance. This class is not simply for beginners, but anyone who wishes to deepen their practice.
                    </p>
                    <p>$10.00</p>
                </div>   
            </div>
        );
    }
}

export default Classes;