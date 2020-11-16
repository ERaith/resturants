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

  return (
    <div className="App">
      <Dashboard data={data} headerMeta={headerMeta}/>
    </div>
  );
}

export default App;

