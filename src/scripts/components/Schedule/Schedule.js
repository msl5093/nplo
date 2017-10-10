import './schedule.css';

class Schedule extends React.Component {
    render () {
        return (
            <div className="mw8 w-80-l w-80 center raleway pa2 mt4">  
                <h2 className="fw7 scriptoramaJf lh-title black-70 f2 f1-ns">Schedule</h2>              
                <p>Our class schedule will load below. If it does not show up after a few seconds, please refresh the page.</p>
                <div className="iframe-container">
                    <iframe name="frame2" src="https://app.punchpass.com/org/4061/classes?embed=true" height="700" width="100%"></iframe> 
                </div>
            </div>
        );
    }
}

export default Schedule;