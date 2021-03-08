import Layout from "../components/Layout";
import { useState } from "react";
import { Document, Page } from "react-pdf";

const curriculumVitae = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Layout>
      <Document
        file="/public/curriculum.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Layout>
  );
};

export default curriculumVitae;
