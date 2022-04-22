import React from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import Tiles from '../common/Tiles'
import TempalteCreate from './TemplateCreate'

const Templates = () => {

  const sales = [
    { content: '37', title: 'TOTAL PRODUCTS' },
    { content: '2', title: 'OUT OF STOCKS' },
    { content: '32.99 $', title: 'AVERAGE SELL PRICE' },
    { content: '16.52 $', title: 'AVERAGE BUY PRICE' },
  ]

  const templates = [
    {id: 'TEMP000001', name: 'My Awesome Template', quantity: '30', markup: '1.6', margin: '60%'},
    {id: 'TEMP000002', name: 'High Margin Template', quantity: '30', markup: '2.5', margin: '150%'},
  ]

  const [showProductType, setShowProductType] = React.useState('all')

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9 p-0'>
          <div className='p-4 bg-ma-grey h-100'>
            <Header />
            <Tiles tiles={sales} />
            <div className='row'>
              <div className='col-12'>
                <div className='bg-white rounded-xl my-2 shadow py-3 px-1'>
                  <div className='d-flex px-3'>
                    <div className={`px-2 text-center width-150 text-ma-primary h3-ma d-inline-block pb-1 cursor-pointer ` + (showProductType === 'all' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowProductType('all')}>All Products</div>
                    <div className={`px-2 text-center width-150 text-ma-primary h3-ma d-inline-block pb-1 cursor-pointer ` + (showProductType === 'in' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowProductType('in')}>In Stock</div>
                    <div className={`px-2 text-center text-ma-primary h3-ma d-inline-block pb-1 cursor-pointer ` + (showProductType === 'out' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowProductType('out')}>Out of Stock</div>
                  </div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-lg-10 mt-3'>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-ma-input border-ma">
                              <i className='fa fa-search'></i>
                            </span>
                          </div>
                          <input type="text" className="form-control bg-ma-input text-ma-detail text-ma-primary border-left-0 border-ma" placeholder="Search for Template ID, Name" />
                        </div>
                      </div>
                      <div className='col-lg-2 mt-3'>
                        <button
                          className='btn w-100 bg-ma-secondary text-ma-detail text-ma-primary border-ma'
                          data-toggle="modal" data-target="#myModal"
                        >
                          <i className='fa fa-cart-plus mr-2' style={{ fontSize: '20px' }}></i>New Template
                        </button>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-4 mt-3'>
                        <select className='form-control bg-ma-input text-ma-detail text-ma-primary border-ma'>
                          <option>Bulk Actions</option>
                        </select>
                      </div>
                      <div className='col-lg-2 mt-3'>
                        <button
                          className='btn w-100 bg-ma-secondary text-ma-detail text-ma-primary border-ma'
                        >
                          <div className='d-flex align-items-center justify-content-center'>
                            <img alt='SETIMAGE' className='img-fluid mr-2' src='/img/export.png' width='17' />
                            <span>EXPORT</span>
                          </div>
                        </button>
                      </div>
                      <div className='col-lg-2 mt-3'>
                        <button
                          className='btn w-100 bg-ma-secondary text-ma-detail text-ma-primary border-ma'
                        >
                          <div className='d-flex align-items-center justify-content-center'>
                            <img alt='SETIMAGE' className='img-fluid mr-2' src='/img/import.png' width='17' />
                            <span>IMPORT</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 mb-3'>
                        <div className='table-responsive'>
                          <table className='table table-borderless product-table text-ma-primary'>
                            <thead className='border-bottom'>
                              <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Markup</th>
                                <th>Margin</th>
                                <th><button className='btn'><i className='fa fa-trash-o'></i></button></th>
                              </tr>
                            </thead>
                            <tbody>
                              {templates.map((template, index) => 
                                <tr key={index}>
                                  <td>{template.id}</td>
                                  <td>{template.name}</td>
                                  <td>{template.quantity}</td>
                                  <td>{template.markup}</td>
                                  <td>{template.margin}</td>
                                  <td><button className='btn'><i className='fa fa-trash-o'></i></button></td>
                                </tr>
                              )}
                            </tbody>
                          </table>
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
      <TempalteCreate />
    </div>
  )
}

export default Templates