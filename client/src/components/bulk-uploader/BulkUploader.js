import React from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'

const BulkUploader = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9 p-0'>
          <div className='p-4 bg-ma-grey h-100'>
            <Header />
            <div className='row'>
              <div className='col-12'>
                <div className='bg-white rounded-xl my-2 shadow py-3'>
                  <div className='text-ma-title text-ma-primary pl-3'>
                    Bulk Uploader
                  </div>
                  <hr />
                  <div className='text-ma-primary'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Template
                    </div>
                    <div className='col-12 mb-2'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Upload Product Links
                    </div>
                    <div className='col-12 mb-3'>
                      <textarea className='form-control bg-ma-input border-ma' rows={5} />
                    </div>
                    <div className='col-12 mb-3'>
                      <button className='btn bg-ma-primary text-white'>Upload</button>
                    </div>
                    <div className='text-ma-title pl-3 my-2'>
                      Supported Suppliers
                    </div>
                    <div className='col-md-6 p-0'>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(index =>
                        <>
                          <div className='d-inline-block px-3 my-1'>
                            <i className='fa fa-check-square-o text-ma-success'></i> AliExpress
                          </div>
                          <div className='d-inline-block px-3 my-1'>
                            <i className='fa fa-square-o text-ma-danger'></i> AliExpress
                          </div>
                        </>
                      )}
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

export default BulkUploader