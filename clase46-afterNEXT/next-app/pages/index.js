import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('/api/books')
      .then(res => {
        setBooks(res.data)
      }).catch(err => {
        console.log(err)
      }
      )
  })

  return (
    <div>
      <h1>Mis libros</h1>
      <ul>
      {books.map((book,i) => ( 
        <li key={i}> {book.name} </li>) 
      )}
      </ul>
    </div>
  )
}
