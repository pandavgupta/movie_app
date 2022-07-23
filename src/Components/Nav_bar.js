import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav_bar extends Component {
  render() {
    return (
        <div style={{display: 'flex',padding: '0.5rem'}}>
        <Link to="/" className='link_text'><h1 >Movies App</h1></Link>
        <Link to="/favourite" className='link_text'><h2 style={{marginLeft: '2rem',marginTop: '0.4rem'}}>favourite</h2></Link>
        
      </div>
    )
  }
}

