
import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
   const[person , setPerson] = useState({
        name:"hamza" , 
       bio : "student" ,
        age : 27 ,
        picture : <img src ='/profil.png' alt=''></img>
  })
  return (
    <div>
      <p> name : {person.name}</p>
      <p>bio : {person.bio}</p>
      <p>age : {person.age}</p>
        show : {person.picture}
   </div>
  )
 }

 

export default App;
