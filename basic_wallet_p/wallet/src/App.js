import React,{useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/chain")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="App">
      New Wallet App
    </div>
  );
}

export default App;
