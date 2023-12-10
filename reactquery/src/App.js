//create app component and import Planets component and render it

import React from 'react';
import Planets from './useQuery/1-Planets';
import Books from './useQuery/2-Books';
import BooksRest from './useQuery/3-BooksRest';
import GetBooks from './useQuery/5_getBook';


const App = () => {
  return (
    <div>
      {/* <Planets />
      <Books/> */}
      {/* <BooksRest/> */}
      <GetBooks/>

    </div>
  );
};

export default App; 
