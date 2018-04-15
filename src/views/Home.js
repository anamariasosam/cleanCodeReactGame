import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (
  <div>
    <img
      src={'assets/images/programmer.gif'}
      alt='programmer'
    />

    <Link
      to='/game'
      className="btn"
    >
      Darle cafeína
    </Link>
  </div>
)
export default Home
