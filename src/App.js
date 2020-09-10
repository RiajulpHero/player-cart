import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const player=[
    {name:'Rickie Ponting', age: '29', country:'Australia'},
    {name:'Virat Kohli', age: '28', country: 'India'},
    {name: 'Messi', age: '32', country: 'Argentina'},
    {name: 'Ronaldo', age: '34', country: 'Portugal'},
    {name: 'Neymar', age: '27', country: 'Brazil'},
    {name: 'Shakib Al Hasan', age: '28', country: 'Bangladesh'},
    {name: 'Wasim Akram', age:'37', country: 'Pakistan'},
    {name: 'Luka Duncic', age: '22', country: 'Siberia'},
    {name: 'Mohammad Ali', age:'28', country: 'United States of America'},
    {name: 'Wasine Bolt', age: '33', country: 'Jamaika'},
    {name: 'Maria Sarapova', age: '29', country: 'Russia'}
  ]
  return (
    <div className="App">
    <div style={{display:"flex"}}>
    <Player player={player[0]}></Player>
     <Player player={player[1]}></Player>
     <Player player={player[2]}></Player>
     <Player player={player[3]}></Player>
    </div>
     <div style={{display:"flex"}}>
     <Player player={player[4]}></Player>
     <Player player={player[5]}></Player>
     <Player player={player[6]}></Player>
     <Player player={player[7]}></Player>
     </div>
    <div style={{display:"flex"}}>
     <Player player={player[8]}></Player>
     <Player player={player[9]}></Player>
     <Player player={player[10]}></Player>
    </div>
    </div>
  );
}
function Player(props) {
  const playerStyle ={
    height: "200px",
    width: "600px",
    backgroundColor: "skyblue",
    borderRadius: "20px",
    boxShadow: "7px 7px 12px grey",
    margin: "20px",
    padding: "16px"
  }
  const {name, age, country} = props.player;
  return(
   <div style={playerStyle}>
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Country: {country}</p>
   </div>
  );
}
export default App;
