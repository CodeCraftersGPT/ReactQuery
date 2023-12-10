//create app component and import Planets component and render it

import React from 'react';
import Planets from './useQuery/Planets';
import Books from './useQuery/Books';
import BooksRest from './useQuery/BooksRest';


const App = () => {
  return (
    <div>
      {/* <Planets />
      <Books/> */}
      <BooksRest/>

    </div>
  );
};

export default App; 
