import React from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import { useHistory } from 'react-router-dom'

const orders = [
  { id: '153164', status: 'Pending', customer: 'Josue Monterio', totalItems: 1, totalAmount: 13.95, date: '11 Jan 2022' },
  { id: '153163', status: 'Canceled', customer: 'German Arrunfat', totalItems: 1, totalAmount: 163.5, date: '11 Jan 2022' },
  { id: '153162', status: 'Shipped', customer: 'Timothy Gann', totalItems: 21, totalAmount: 135.9, date: '10 Jan 2022' },
  { id: '153161', status: 'Complete', customer: 'David Mathews', totalItems: 213, totalAmount: 11.05, date: '10 Jan 2022' }
]

const Orders = () => {

  const history = useHistory()

  const [showOrderType, setShowOrderType] = React.useState('all')

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9 p-0'>
          <div className='p-4 bg-ma-grey h-100'>
            <Header />
            <div className='row'>
              <div className='col-12'>
                <div className='bg-white rounded-xl my-2 shadow py-3 px-1'>
                  <div className='d-flex px-3'>
                    <div className={`px-2 text-center width-120 text-ma-primary h4-ma d-inline-block pb-1 cursor-pointer ` + (showOrderType === 'all' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowOrderType('all')}>All Prders</div>
                    <div className={`px-2 text-center width-120 text-ma-primary h4-ma d-inline-block pb-1 cursor-pointer ` + (showOrderType === 'completed' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowOrderType('completed')}>Completed</div>
                    <div className={`px-2 text-center width-120 text-ma-primary h4-ma d-inline-block pb-1 cursor-pointer ` + (showOrderType === 'pending' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowOrderType('pending')}>Pending</div>
                    <div className={`px-2 text-center width-120 text-ma-primary h4-ma d-inline-block pb-1 cursor-pointer ` + (showOrderType === 'shipped' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowOrderType('shipped')}>Shipped</div>
                    <div className={`px-2 text-center width-120 text-ma-primary h4-ma d-inline-block pb-1 cursor-pointer ` + (showOrderType === 'canceled' ? 'border-bottom-ma' : 'border-bottom')} onClick={() => setShowOrderType('canceled')}>Canceled</div>
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
                          <input type="text" className="form-control bg-ma-input text-ma-detail text-ma-primary border-left-0 border-ma" placeholder="Search for Order ID, Customer, Status, Address or Date" />
                        </div>
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
                      <div className='col-12 mt-3'>
                        <div className='table-responsive'>
                          <table className='table text-ma-primary text-ma-detail table-borderless'>
                            <thead className='border-bottom'>
                              <tr>
                                <th>ID</th>
                                <th>Status</th>
                                <th>Customer</th>
                                <th>Total Items</th>
                                <th>Total</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((order, index) =>
                                <tr key={index} className='cursor-pointer' onClick={() => history.push(`/order/${order.id}`)}>
                                  <td># {order.id}</td>
                                  <td><div className={`badge-ma badge-ma-${order.status}`}>{order.status}</div></td>
                                  <td>{order.customer}</td>
                                  <td>{order.totalItems}</td>
                                  <td>$ {order.totalAmount}</td>
                                  <td>{order.date}</td>
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
    </div>
  )
}

export default Orders