import React from 'react'

//import img1 from './images/nature.jpg'
// <img src={img1} />   this tag is used for image from directory

const Book = (props) => {
  
  const {image,title,author,price} = props;

  return (
    <>
     <img src={image} />
    <h1>{title}</h1>
    <p>{author}</p>
    <p>{price}</p>
    <button>Add To Cart</button> 
    <br /><hr /> 
    </>
  )
}

export default Book
