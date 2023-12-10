import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPlanets = async () => {
  const res = await axios.get('http://swapi.dev/api/planets/');
  return res.data;
}

const App = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {/* <p>{ status }</p> */}
      { status === 'loading' && (
        <div>Loading data...</div>
      )}
      { status === 'error' && (
        <div>Error fetching data</div>
      )}
      { status === 'success' && (
        <div>
          { data.results.map(planet => (
            <div key={planet.name}>{ planet.name }</div>
          )) }
        </div>
      )}
    </div>
  );
}

export default App;
