import React from 'react'
import Top from './Top'
import Navboxes from './Navboxes'
import { Link } from 'react-router-dom'


const Home = () => (
  <div className="container">
    <Top />
    <Navboxes />
  </div>
)

export default Home
