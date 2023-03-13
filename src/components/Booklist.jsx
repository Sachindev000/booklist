import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booklist.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, FormControl, NavLink } from 'react-bootstrap';

const Booklist = () => {

  const [search,setSearch]=useState("")
  console.log(search);

  

  const[Book,setBook]=useState([])
  useEffect(()=>{
    axios.get('https://api.itbook.store/1.0/new').then(res=>{
      console.log(res);
      setBook(res.data.books)
    })
  })

  return (
    <>
    <div>
    <h1 style={{textAlign:"center",fontFamily:"serif",backgroundColor:"lightblue",width:"100%"}}>New Booklist 2023</h1>
    <NavLink><Button variant=""  style={{backgroundColor:"lightblue",float:"right",marginleft:"12px"}}>Favorited books</Button></NavLink>
    <Form>
      <InputGroup  className='my-3' style={{width:"50%",marginLeft:"320px"}}>
        <FormControl  onChange={(e) => setSearch(e.target.value)} placeholder='Search book by title..'></FormControl>
      </InputGroup>
    </Form>

    </div>
    <div className='Booklist'>
    
      {Book.filter((book)=>{
        return search.toLocaleLowerCase()===''?book : book.title.toLowerCase().includes(search)
      }).map((book)=>(
        <div key={book.id}>
          <div><img src={book.image}></img></div>
          <div><h2>{book.title}</h2></div>
          <div><h4>{book.subtitle}</h4></div>
          <div><p>{book.price}</p></div>
          <div> <Button variant="" style={{marginLeft:"75px",backgroundColor:"lightblue"}}>Add to Favorites</Button>{' '}</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Booklist

