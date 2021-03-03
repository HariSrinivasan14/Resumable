import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PdfDisplay.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PdfDisplay extends React.Component{
    state = {
        pdf: null,
        textSelection: null
    };

    documentRef = React.createRef();

    componentDidMount() {
        const url = this.props.url;
        console.log(url);
        let loadingTask =  pdfjs.getDocument(url);
        loadingTask.promise.then(pdf => {
            this.setState({ pdf });
        });
    }

    // getTextSelection(){
    //     let text = window.getSelection().toString();
    //     // this.setState({ textSelection: text });
    //     console.log(text);

    // }

	render(){
        const pdf = this.state.pdf
        const pageWidth = 0.69 * window.innerWidth;
        console.log(pdf);
		return(
            <div className="pdf-container" onClick={this.getTextSelection}>
                <Document
                    file={this.props.url}
                >
                <Page 
                    className="page" 
                    pageNumber={1} 
                    renderTextLayer={true} 
                    width={pageWidth} />
                </Document>
            </div>
		);
	}
}

export default PdfDisplay;