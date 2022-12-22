import React from 'react'
import { ApiFetch } from './api-fetch';

function App() {
  return (
    <div>
      <ApiFetch
        title= "Joke API"
        fetchUrl= "https://official-joke-api.appspot.com/random_joke"
      />
    </div>
  );
}

export default App;
