import React, { createRef, useEffect, useRef, useState } from 'react';
import './App.css';
import Box from './components/Box';


export type FocusHandle = {
  start: () => void;
};

function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if(ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);    
    }
  }, []);

  return (
    <div className="App">
      <Box boxBackground='#f5f6fa' ref={ref} width={width} titleColor='#192a56'>
       Box, который показывает ширину 
     </Box>
    </div>
  );
}

export default App;
