import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import './App.css';
function App() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      m:5
      ,p:1,
      background:"#fff",
      width: 600,height: 600,overflow: "scroll"}}>
        <Paper elevation={24}>
          <Document  file="/RBCs.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                 <Page
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
          </Paper>
      </Box>  
  
  );
}

export default App;