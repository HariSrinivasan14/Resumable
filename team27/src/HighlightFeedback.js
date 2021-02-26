import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './images/sampleResume.pdf'
import HighlightSidebar from './HighlightSidebar'
import PdfViewer from './PdfViewer'
import './HighlightFeedback.css';
import sampleImg from './images/resHeader.JPG'

class HighlightFeedBack extends React.Component{
	render(){
		const feedback = [
			{
				content: {
					text:"please fix the spelling of...",
					image: null
				},
				comment: {
					text:"Spelling Mistake",
				}
			}, 
			{
				content: {
					text:"consider the following...",
					image: null
				},
				comment: {
					text:"Sentence Structure",
				}
			},
			{
				content: {
					text:"consider the following...",
					image: sampleImg
				},
				comment: {
					text:"Header...",
				}
			}
		];
		return(
			<div className="highlight-feedback-container">
				<div className="highlight-feedback-sidebar">
					<HighlightSidebar feedbackItems={feedback} ></HighlightSidebar>
				</div>
				<div className="highlight-feedback-document">
					<PdfViewer url={pdf}></PdfViewer>
				</div>
            </div>
		);
	}
}

export default HighlightFeedBack;