import React from 'react'
import { ApiFetch } from './api-fetch';
import { FetchApiList } from './utils';
import './App.css'

function App() {
  return (
    <>
      <h1>Free APIs</h1>
      <div className="main-div">
        {FetchApiList.map((list) => {
          return (
            <ApiFetch
              id={list.key}
              title={list.title}
              fetchUrl={list.url}
            />
          )
        })
        }
      </div>
    </>
  );
}

export default App;
