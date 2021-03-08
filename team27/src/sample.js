import React from "react";

import SinglePagePDFViewer from "./pdf-viewer";
import AllPagesPDFViewer from "./pdf-viewer";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./resume.pdf";

import "./styles.css";

export default function Sample() {
    return (
        <div className="App">
          <h4>Single Page</h4>
          <SinglePagePDFViewer pdf={samplePDF} />
    
          <hr />
    
          <h4>All Pages</h4>
          <div className="all-page-container">
            <AllPagesPDFViewer pdf={samplePDF} />
          </div>
    
          <hr />
    
    
    
          <hr />
        </div>
      );
}