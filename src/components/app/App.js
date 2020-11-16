import React, { useState, useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import { fetchData } from "../../api/ApiCalls";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

