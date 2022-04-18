import React from 'react'

const UserItem = ({ imgSrc, title, detail }) => {

  return (
    <div className='bg-white rounded-xl p-2 my-2 shadow'>
      <div className='d-flex align-items-center'>
        <img alt='SETIMAGE' className='img-fluid rounded-xl' width='75' height='75' src={imgSrc} />
        <div className='ml-3'>
          <div className='h3-ma text-ma-primary'>{title}</div>
          <div className='text-ma-secondary text-ma-detail text-uppercase'>{detail}</div>
        </div>
      </div>
    </div>
  )
}

export default UserItem