import React, {useState,useEffect} from 'react';

import Dashboard from '../pages/Dashboard';

import './App.scss';

function App() {
  const [data,setData] = useState([])

  async function fetchData() {
    const res = await fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization": "Api-Key q3MNxtfep8Gt",
      }
    })
    return res.json()
    
  }

  useEffect(() => {
    fetchData()
    .then(data=>setData(data))
    
  }, [])

  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;


// fetch(“https://code-challenge.spectrumtoolbox.com/api/restaurants”, {
//   headers: {
//   Authorization: “Api-Key q3MNxtfep8Gt”,
//   },
//  });