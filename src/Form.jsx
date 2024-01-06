import React, { useState } from 'react'

const Form = () => {
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

    const hanldername = (obj) => {
    console.log(obj.target.value); 
    setName(obj.target.value);
  };
  
  const hanlderemail = (em) => {
    console.log(em.target.value); 
    setEmail(em.target.value);
  };

  const handlerpassword = (pass) => {
    console.log(pass.target.value); 
    setPassword(pass.target.value);
  };

  const handlersubmit = (sub) => {
     sub.preventDefault();
  };

     return (
    <form onSubmit={handlersubmit}>
      <h2>Name:</h2>
      <input  type="text" value={name} onChange={hanldername} placeholder='Enter Your Name' /> 
       <p>{name}</p> 

       <h2>Email:</h2>
      <input  type="email" value={email} onChange={hanlderemail} placeholder='Enter Your Email' /> 
       <p>{email}</p> 
      
      <h2>Password:</h2>
      <input type="password" value={password} onChange={handlerpassword} placeholder='Enter Your Password' />
      <br /><br />
      <button type='submit'>Submit</button>
       <br /><hr />
    </form>
  )
}

export default Form;
