import React from 'react'

const TileItem = ({ title, content }) => {

  return (
    <div className='col-lg-3 col-md-6 my-2 d-flex align-items-stretch'>
      <div className='rounded-xl bg-ma-primary p-3 shadow w-100'>
        <div className='text-ma-title text-ma-secondary'>{title}</div>
        <div className='text-ma-content text-white'>{content}</div>
      </div>
    </div>
  )
}

export default TileItem