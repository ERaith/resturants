import React, { useState, useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import { fetchData } from "../../api/ApiCalls";
import {headerMeta} from '../../api/data'
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const genreFilterKeys = data.reduce((acc,curVal)=>{
    const vals = curVal.genre.split(',')
    return [...new Set([...acc,...vals])]
  },[])

  return (
    <div className="App">
      <Dashboard data={data} headerMeta={headerMeta} genreFilterKeys={genreFilterKeys}/>
    </div>
  );
}

export default App;

