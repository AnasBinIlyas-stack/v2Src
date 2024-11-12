import React, { useEffect, useRef } from 'react';
import { getDocument } from 'pdfjs-dist/webpack'; // Use webpack build

const PdfViewer = ({ pdfBlob }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const renderPdf = async () => {
            // Convert Blob to ArrayBuffer
            const arrayBuffer = await pdfBlob.arrayBuffer();

            const loadingTask = getDocument({ data: arrayBuffer }); // Use the ArrayBuffer

            try {
                const pdf = await loadingTask.promise;
                const numPages = pdf.numPages; // Get the total number of pages

                // Clear previous content
                containerRef.current.innerHTML = '';

                const scale = 2; // Adjust scale for better quality

                for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);

                    // Create a canvas for each page
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');

                    const viewport = page.getViewport({ scale }); // Use higher scale
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    // Render the page into the canvas context
                    await page.render({ canvasContext: context, viewport }).promise;

                    // Append the canvas to the container
                    containerRef.current.appendChild(canvas);
                }
            } catch (error) {
                console.error('Error rendering PDF:', error);
            }
        };

        renderPdf();
    }, [pdfBlob]);

    return (
        <div ref={containerRef} className='d-flex flex-column' style={{ maxWidth: "50%", margin: "0 auto", gap: "15px 0" }}></div>
    );
};

export default PdfViewer;
