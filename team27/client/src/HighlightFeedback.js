import React from 'react';
import pdf from './images/sampleResume.pdf';
import HighlightSidebar from './HighlightSidebar';
// import PdfDisplay from './PdfDisplay';
import PdfHighlight from './PdfHighlight';
import {newComment} from './actions/post'
import './HighlightFeedback.css';
import { Link } from 'react-router-dom';


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

	postFeedback(e) {
		console.log(this.state.feedback);
		let postId = this.props.location.state.postId
		let newHighlightComment = {
			type: "HIGHLIGHT",
			Username: this.props.location.state.user,
			text: `http://localhost:3000/highlight-feedback-view`,
			time: Date().toLocaleString(),
			feedback: this.state.feedback
			
		};
		newComment(postId, newHighlightComment)
	}
	
	render(){
		return(
			<div>
				<div className="highlight-feedback-container">
					<div className="highlight-feedback-document">
						<PdfHighlight url={pdf} onFeedbackSubmit={this.addFeedback}></PdfHighlight>
					</div>
					
					<div className="highlight-feedback-sidebar">
						<HighlightSidebar feedbackItems={this.state.feedback}></HighlightSidebar>
					</div>
					
				</div>
					<button id="back" onClick={() => this.props.history.goBack()}>Back</button>
			<Link
              to={{
                pathname: `/ResumeView/${this.props.location.state.postId}`,
				state:{user: this.props.location.state.user, data: {post:this.props.location.state.post}}
              }}
            >
				<button id="feedback-submit" onClick={() => {this.postFeedback();}}>Submit</button>

            </Link>
					
			</div>
			
		);
	}
}

export default HighlightFeedBack;