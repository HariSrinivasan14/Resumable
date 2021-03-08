import React from 'react';
import pdf from './images/sampleResume.pdf';
import HighlightSidebar from './HighlightSidebar';
// import PdfDisplay from './PdfDisplay';
import PdfHighlight from './PdfHighlight';
import './HighlightFeedback.css';
import sampleImg from './images/resHeader.JPG'

class HighlightFeedBack extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			feedback: [
				// {
				// 	content: {
				// 		text:"please fix the spelling of...",
				// 		image: null
				// 	},
				// 	title: {
				// 		text:"Spelling Mistake",
				// 	}
				// }, 
				// {
				// 	content: {
				// 		text:"consider the following...",
				// 		image: null
				// 	},
				// 	title: {
				// 		text:"Sentence Structure",
				// 	}
				// },
				// {
				// 	content: {
				// 		text:"consider the following...",
				// 		image: sampleImg
				// 	},
				// 	title: {
				// 		text:"Header...",
				// 	}
				// }
			]
		}
		this.addFeedback = this.addFeedback.bind(this);
	}
	
	
	addFeedback(newFeedback) {
    	this.setState({ feedback: [newFeedback, ...this.state.feedback] });
	}
	
	render(){

		return(
			<div className="highlight-feedback-container">
				<div className="highlight-feedback-document">
					<PdfHighlight url={pdf} onFeedbackSubmit={this.addFeedback}></PdfHighlight>
				</div>
				<div className="highlight-feedback-sidebar">
					<HighlightSidebar feedbackItems={this.state.feedback}></HighlightSidebar>
				</div>
            </div>
		);
	}
}

export default HighlightFeedBack;