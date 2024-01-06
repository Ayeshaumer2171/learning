import React from 'react'
import Book from './Book'
import Books from './books.json'


 const Bookdata = () => {

    return (
    <div>
      {Books.map((ele)=>{
        return <Book
        image={ele.image} 
        title={ele.title} 
        author={ele.author} 
        price={ele.price} />
      })}
    </div>
  )
}

export default Bookdata;
