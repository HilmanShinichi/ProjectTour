import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './../styles/notfound.css'

const Notfound = () => {
  return (
    <div class="notfound__wrap-error">
    <div class="d-flex align-items-center h-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 text-center text-white notfound__span">
            <h1 class=""><span>4</span><span>0</span><span>4</span></h1>
            <h5 class="">Oops! Page not found</h5>
            <p class="mb-4">we are sorry, but the page you requested was not found</p>
            <Button className='btn primary__btn'>
                <Link to='/home'>Back To Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Notfound