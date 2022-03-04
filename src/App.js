import React from 'react';

function Fruit({ fav }){
  return <h1>I like { fav }</h1>;
}

function App() {
  return (
    <div> 
      <h1>Hello</h1>
      <Fruit fav="banana" />
      <Fruit fav="orange" />
      <Fruit fav="apple" />
      <Fruit fav="melon" />          
    </div>
  );  
}

export default App;