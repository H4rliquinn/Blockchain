import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [chain,saveChain]=useState(null);
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/chain")
    .then((res) => {
      console.log(res);
      saveChain(res.data.chain);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  // if (chain!=null){
  //   console.log("YEY");
  // }

  return (
    <div className="App">
      New Wallet App
      <div className="transactions">
        <h2>Transactions</h2>
        <ul>
          {chain!=null&& <li>Thing</li>&&chain.map(item => {
              return item.transactions.map(trans => {
                return <li key={item.index+trans.recipient}>{`Transfer ${trans.amount} from ${trans.sender} to ${trans.recipient}`}</li>
              })
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
