import React from 'react'

const Header = () => {

  return (
    <div className='p-2'>
      <div className='d-flex align-items-center'>
        <img alt='SETIMAGE' className='img-fluid' width='50' height='50' src='/img/header/header.png' />
        <div className='ml-3 h2-ma text-ma-primary'>Hooley World</div>
      </div>
    </div>
  )
}

export default Header