//create app component and import Planets component and render it

import React from 'react';
import Planets from './useQuery/Planets';
import Books from './useQuery/Books';

const App = () => {
  return (
    <div>
      <Planets />
      <Books/>
    </div>
  );
};

export default App; 
