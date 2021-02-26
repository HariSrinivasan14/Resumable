import React from 'react';
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/lib/pdf";
import PdfjsWorker from "pdfjs-dist/lib/pdf.worker";
import { Document, Page, pdfjs } from 'react-pdf';

import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PdfViewer extends React.Component{
    state = {
        pdf: null,
    };

    componentDidMount() {
        const url = this.props.url;
        console.log(url);
        getDocument({ url }).promise.then(
            pdf => {this.setState({ pdf });}
          )
    }

	render(){
        const pdf = this.state.pdf
		return(
			<div>
                <div className="document">
                    <Document
                        file={this.props.url}
                    >
                    <Page pageNumber={1}/>
                    </Document>
                </div>
            </div>
		);
	}
}

export default PdfViewer;