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
            highlightCoords: [],
            feedbackPopupOpen: false,
            feedbackComment: "",
            feedbackPopupCoords: null,
            canvasDim:null
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
            this.setState({canvasDim:canvasRect});
            let text = window.getSelection();
            console.log(text);
            if (text && text.baseNode) {
                if (text.baseNode.textContent.trim() !== "" && text.baseNode.length > 0) {
                    console.log(text.baseNode.length);
                    let textRect = text.getRangeAt(0).getBoundingClientRect();
                    console.log(textRect);
                    if (textRect.x <= canvasRect.width && textRect.y <= canvasRect.height) {
                        let textRectCoords = {
                            x: textRect.x,
                            y: textRect.y,
                            h: textRect.height,
                            w: textRect.width
                        };
                        this.setState({ textSelection: text.toString() });
                        this.setState({ feedbackPopupCoords : textRectCoords });
                        this.setState( {highlightCoords: [...this.state.highlightCoords, textRectCoords] });
                        this.setState({ feedbackPopupOpen: true });    
                    }
                }
            } 
        } else {
            console.log("open");
        }   
        
    }

    handleFeedbackComment(e) {
        // console.log(this.state.textSelection);
        // console.log(e.target.value);

        
        if (e.target.value != null && e.target.value != "") {
            let currHighlightCoord = this.state.highlightCoords[this.state.highlightCoords.length -1]
            this.setState({ highlightID: this.state.highlightID + 1 });

            console.log(this.state.highlightCoords);
            this.setState({ highlights: [...this.state.highlights, <Highlight
                key ={this.state.highlightID}
                highlightID={this.state.highlightID}
                x={currHighlightCoord.x}
                y={currHighlightCoord.y - this.state.canvasDim.y}
                h={currHighlightCoord.h}
                w={currHighlightCoord.w} />]});


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