import React, { Component } from 'react'
import logo from '../../assets/images/logo.png';

export default class PageNotFound extends Component {

  render() {
    return (
      <div className='image-background image-background--no-overlay'>
        <div className='py-10'>
          <h3>A página que procura não existe</h3>
        </div>
      </div>
    )
  }
}
