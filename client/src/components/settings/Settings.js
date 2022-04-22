import React from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'

const Settings = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9 p-0'>
          <div className='p-4 bg-ma-grey h-100'>
            <Header />
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='bg-white rounded-xl my-2 shadow py-3'>
                      <div className='text-ma-title text-ma-primary px-3'>Store Info</div>
                      <hr />
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Name</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Hooley World</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Location</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Facebook</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>ID</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>500496481573607</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Date Created</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Mar 16, 2022</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Owner</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Hooley Solutions LLC</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>State</div>
                            <div className='badge-ma bg-ma-success mb-2 py-0'>Pending</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Contact</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Steven Hooley</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Manager</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Gabriela Moniz</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='bg-white rounded-xl my-2 shadow py-3'>
                      <div className='text-ma-title text-ma-primary px-3'>Data Feed</div>
                      <hr />
                      <div className='px-3 mb-3 pb-3'>
                        <div className='text-ma-light'>Data Feed Url</div>
                        <div className='text-ma-primary text-ma-detail mb-2'>https://app.marketplace-automation.com/clientID/StoreID/datafeed.csv</div>
                        <div className='my-4'>
                          <button className='btn border-ma bg-ma-secondary text-ma-primary'>
                            <i className='fa fa-cloud-download mr-2'></i>DOWNLOAD
                          </button>
                        </div>
                        <div className='text-ma-light'>How to add Data Feed to Facebook Commerce?</div>
                        <div className='text-ma-primary text-ma-detail'>https://marketplace-automation.com/docs/datafeed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings