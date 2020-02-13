import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [chain,saveChain]=useState(null);
  let [user,setUser]=useState(24601);

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


  return (
    <div className="App">
      New Wallet App
      <div className="login">
        <input value={user} onChange={(e)=>setUser(e.target.value)} />
      </div>
      <div className="transactions">
  
        <h2>Transactions</h2>
        <ul>
          {chain!=null&& <li>Thing</li>&&chain.map(item => {
              return item.transactions.map(trans => {
                if (trans.sender==user){
                  return <li key={item.index+trans.recipient} className="Sent">{`Transfer ${trans.amount} from ${trans.sender} to ${trans.recipient}`}</li>
                }else if (trans.recipient==user){
                  return <li key={item.index+trans.recipient} className="Recieve">{`Transfer ${trans.amount} from ${trans.sender} to ${trans.recipient}`}</li>
                }
              })
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
