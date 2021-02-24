import Games from './component/Games'
import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
      <h1 className="title">Teste Games</h1>
      </div>
      <Games />
    </Fragment>
  );
}

export default App;
