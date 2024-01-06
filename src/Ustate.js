import React, { useState } from 'react'

export default function Ustate() {
 
 const[add,setadd] = useState(0);
 
 const handleplus = () =>{
  setadd(add+5);
 }
 
const handleminus = () =>{
 setadd(add-5);
}

  return (
    <>
      <h1>Table of 5 = {add} </h1>
      <button onClick={handleplus}>+</button>
      <button onClick={handleminus}>-</button><br/><br/><hr/>
    </>
  )
}
