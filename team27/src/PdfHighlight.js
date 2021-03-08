import React from 'react';
import PdfDisplay from './PdfDisplay';
import FeedbackModal from './FeedbackModal';
import Highlight from './Highlight';

class PdfHighlight extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            textSelection: null,
            highlights: [],
            highlightID:0,
            feedbackPopupOpen: false,
            feedbackComment: "",
            feedbackPopupCoords: null
        };

        this.handleTextSelection = this.handleTextSelection.bind(this);
        this.handleFeedbackComment = this.handleFeedbackComment.bind(this);
        
    }

    handleFeedbackModalOpen = () => {
        this.setState({ feedbackPopupOpen: true });
    };

    handleFeedbackModalClose = () => {
        this.setState({ feedbackPopupOpen: false });
    };

    handleTextSelection(){
      
        if (!this.state.feedbackPopupOpen) {
            this.setState({ feedbackPopupOpen: false });
            this.setState({ textSelection: null });
            this.setState({ feedbackPopupCoords : null });
            let canvas = document.getElementsByClassName("react-pdf__Page__canvas");
            let canvasRect = canvas[0].getBoundingClientRect();
            console.log(canvasRect);
            let text = window.getSelection();
            let textCpy = text
            console.log(text);
            if (textCpy) {
                let textRect = text.getRangeAt(0).getBoundingClientRect();
                console.log(textRect);
                let textRectCoords = {
                    x: textRect.x,
                    y: textRect.y,
                    h: textRect.height,
                    w: textRect.width
                };
                this.setState({ textSelection: textCpy.toString() });
                this.setState({ feedbackPopupCoords : textRectCoords });

                // make the highlight on page
                this.setState({ highlightID: this.state.highlightID + 1 });
                console.log(this.state.highlightID);
                this.setState({ highlights: [...this.state.highlights, <Highlight
                    key ={this.state.highlightID}
                    highlightID={this.state.highlightID}
                    x={textRectCoords.x}
                    y={textRectCoords.y - canvasRect.y}
                    h={textRectCoords.h}
                    w={textRectCoords.w} />]});
                

                this.setState({ feedbackPopupOpen: true });
            } 
            
            
        } else {
            console.log("open");
        }   
        
    }

    handleFeedbackComment(e) {
        // console.log(this.state.textSelection);
        // console.log(e.target.value);
        console.log(this.state.highlights[this.state.highlights.length - 1]);
    
        if (e.target.value != null && e.target.value != "") {
            this.setState({feedbackComment: e.target.value});
            let newFeedback = {
                content: {
                    text: this.state.textSelection,
                    image: null
                },
                title: {
                    text: e.target.value,
                },
                highlight: this.state.highlights[this.state.highlights.length - 1]
            };
            this.props.onFeedbackSubmit(newFeedback);
            this.setState({ feedbackPopupOpen: false });
        }
        
        
    }
            
    render(){
		return(
            <div className="pdf-container" onMouseUp={this.handleTextSelection}>
                <PdfDisplay url={this.props.url}></PdfDisplay>
                {this.state.textSelection ? 
                    <FeedbackModal 
                        position = {this.state.feedbackPopupCoords}
                        onFeedbackCommentSubmit={this.handleFeedbackComment}
                        open={this.state.feedbackPopupOpen} 
                        handleClose={this.handleFeedbackModalClose}/> 
                    :null}
                {this.state.highlights ? 
                    this.state.highlights.map(highlight => 
                    (highlight)) : null}
                {/* {this.state.feedbackPopupCoords ? <Highlight 
                    x={this.state.feedbackPopupCoords.x}
                    y={this.state.feedbackPopupCoords.y}
                    h={this.state.feedbackPopupCoords.h}
                    w={this.state.feedbackPopupCoords.w} /> : null} */}
            </div>
		);
	}
}
export default PdfHighlight;



// let pageTextContent = document.getElementsByClassName("react-pdf__Page__textContent")[0];
//                 let textContentToHiglight = []
//                 console.log(pageTextContent.children);
//                 for (let i =0; i < pageTextContent.children.length; i++) {
//                     let c = pageTextContent.children[i]
//                     // console.log(textRectCoords.x);
//                     // console.log(c.style.left);
                    
//                     // console.log(textRectCoords.y);
//                     // console.log(c.style.top);
//                     let top = parseInt(c.style.top.slice(0, -2))
//                     let left = parseInt(c.style.left.slice(0, -2))
//                     if (textRectCoords.x >= left && textRectCoords.y >= top) {
//                         textContentToHiglight.push(c);
//                     }
//                 }
//                 console.log(textContentToHiglight)
//                 for (let i = 0; i < textContentToHiglight.length; i++) {
//                     textContentToHiglight[i].id = "highlight";
//                     console.log(textContentToHiglight[i]);
//                 }