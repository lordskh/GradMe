import React from 'react';
// import PageTitle from './PageTitle.js'
import SlideMenu from './SlideMenu.js'
import SlideContainer from './SlideContainer.js';

class Planner extends React.Component {
	
	constructor() {
		super()
		this.state = {activeItem: options[0]}
  		this.optionHandler = this.optionHandler.bind(this);
  		// {console.log(options[0].constructor === String)}
	}

	/** called by SlideMenu and SlideFooter components
		@param newActive	string in options array **/
	optionHandler(newActive) {
		if (newActive === this.state.activeItem) {
			return;
		}
		
    	this.setState({
        	activeItem: newActive
    	});
  	}

	render() {
        const active = this.state.activeItem;
        var color;
        switch(active) {
        	case options[0]:
        		color = '#E3F7FA';
        		break;
            case options[1]:
                color = '#fffedd';
                break;
            case options[2]:
                color = '#FFE9Ea';
                break;
            default:
                color = 'linear-gradient(to right, #dae2f8, #d6a4a4)';
        }

		return (
			<div id="planner-container" className="ui stackable grid container" style={{background: color}}>
			<div className="two column row">
				
				<div className="four wide left floated middle aligned column">
					<h4 className="ui massive header planner-title">Course Planner</h4>
					<SlideMenu options={options} active={this.state.activeItem} handler={this.optionHandler}/>
				</div>

				<div className="ten wide middle aligned column">
					<SlideContainer options={options} active={this.state.activeItem} handler={this.optionHandler.bind(this)}/>
				</div>

			</div></div>
		)
	}
}

const options = [
  	"Find Requirements",
  	"Pick Majors",
  	"Choose Minors",
  	"Select Professional Tracks"
]

export default Planner;