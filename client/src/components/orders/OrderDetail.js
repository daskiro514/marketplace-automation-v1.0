import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'

const orders = [
  { image: '/img/product-temp.png', id: '#B07QGRWZNB', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', quantity: '1', unitPrice: '21.99', totalPrice: '21.99' },
  { image: '/img/product-temp1.png', id: '#B07QGRWZNC', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', quantity: '2', unitPrice: '17.36', totalPrice: '34.72' },
]

const OrderDetail = ({ match }) => {

  const orderID = match.params.id

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9 p-0'>
          <div className='p-4 bg-ma-grey h-100'>
            <Header />
            <div className='row'>
              <div className='col-12'>
                <div className='py-3 px-1'>
                  <div className='h2-ma text-ma-primary px-2'>Order #{orderID}</div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='bg-white rounded-xl my-2 shadow py-3'>
                      <div className='text-ma-title text-ma-primary px-3'>Overview</div>
                      <hr />
                      <div className='px-3'>
                        <div className='text-ma-light'>Created on:</div>
                        <div className='text-ma-primary text-ma-detail mb-2'>Jan 11 2020, 10:27 am</div>
                        <div className='text-ma-light'>Status:</div>
                        <div className='badge-ma bg-ma-warning mb-2'>Pending</div>
                        <div className='text-ma-light'>Items:</div>
                        <div className='text-ma-primary text-ma-detail mb-2'>1</div>
                        <div className='text-ma-light'>Order Total:</div>
                        <div className='text-ma-primary text-ma-detail'>$ 13.95</div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='bg-white rounded-xl my-2 shadow py-3'>
                      <div className='text-ma-title text-ma-primary px-3'>Customer Details</div>
                      <hr />
                      <div className='container'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>First Name</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Josue</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Last Name</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Monteiro</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Address</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>154 Grenrose Ave</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>City</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>Davenport</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Zip</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>52804</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>State</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>lowa (IA)</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Country</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>United States</div>
                          </div>
                          <div className='col-md-6'>
                            <div className='text-ma-light'>Phone Number</div>
                            <div className='text-ma-primary text-ma-detail mb-2'>(123) 456 7890</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='bg-white rounded-xl my-3 shadow'>
                      <div className='p-3'>
                        <div className='h4-ma text-ma-primary'>Products</div>
                        <div className='text-ma-secondary text-ma-detail'>Product List for this order</div>
                      </div>
                      <div className='table-responsive'>
                        <table className='table text-ma-primary text-ma-detail table-borderless'>
                          <thead className='border-bottom'>
                            <tr>
                              <th>Image</th>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order, index) =>
                              <tr key={index}>
                                <td><img alt='SETIMAGE' src={order.image} width='120px' height='80px' /></td>
                                <td># {order.id}</td>
                                <td>
                                  <div className='td-some-width'>{order.name}</div>
                                </td>
                                <td>{order.quantity}</td>
                                <td>$ {order.unitPrice}</td>
                                <td>$ {order.totalPrice}</td>
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
    </div >
  )
}

export default OrderDetail