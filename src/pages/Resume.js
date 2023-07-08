import '../styles.css';
import React from 'react';
import { Page, Document, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFFILE = () => (
    
    <div className='pdf-border'>
        <div className='pdf-container'>
            <Document file= "/pdf/Resume-LATESTUPDATE.pdf"
                renderTextLayer={false}
                renderAnnotationLayer={false}
                customTextRenderer={false}>
                <Page pageNumber={1}></Page>
            </Document>
        </div>
    </div>
);


export default PDFFILE;
