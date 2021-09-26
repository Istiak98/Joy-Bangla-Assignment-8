import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Team from './components/Team/Team';


function App() {
  useEffect(()=>{
    fetch('./leaders.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
  })
  return (
    <div>
      <Header></Header>
      <Team></Team>
    </div>
  );
}

export default App;
