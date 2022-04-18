import React from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'

const Settings = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9'>
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Settings