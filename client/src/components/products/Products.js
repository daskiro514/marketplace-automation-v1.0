import React from 'react'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import Tiles from '../common/Tiles'
import ProductCreate from './ProductCreate'

const Products = () => {

  const sales = [
    { content: '37', title: 'TOTAL PRODUCTS' },
    { content: '2', title: 'OUT OF STOCKS' },
    { content: '32.99 $', title: 'AVERAGE SELL PRICE' },
    { content: '16.52 $', title: 'AVERAGE BUY PRICE' },
  ]

  const products = [
    { image: '/img/product-temp.png', id: '#B07QGRWZNB', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', stock: 'out', supplierPrice: '21.99', targetPrice: '35.19' },
    { image: '/img/product-temp1.png', id: '#B07QGRWZNC', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', stock: 'in', supplierPrice: '17.36', targetPrice: '25.19' },
    { image: '/img/product-temp.png', id: '#B07QGRWZND', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', stock: 'in', supplierPrice: '15.98', targetPrice: '25.19' },
    { image: '/img/product-temp1.png', id: '#B07QGRWZNE', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', stock: 'out', supplierPrice: '25.34', targetPrice: '35.19' },
    { image: '/img/product-temp.png', id: '#B07QGRWZNF', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', stock: 'out', supplierPrice: '35.68', targetPrice: '45.19' },
    { image: '/img/product-temp1.png', id: '#B07QGRWZNG', name: 'Amazon Basics Lint Roller for Pet Hair, Clothing and Furniture - 1 Handle, 4-Pack Refills of 60-Sheets (240 Sheets Total)', stock: 'in', supplierPrice: '16.00', targetPrice: '25.19' }
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
                          <input type="text" className="form-control bg-ma-input text-ma-detail text-ma-primary border-left-0 border-ma" placeholder="Search for Order ID, Customer, Status, Address or Date" />
                        </div>
                      </div>
                      <div className='col-lg-2 mt-3'>
                        <button
                          className='btn w-100 bg-ma-secondary text-ma-detail text-ma-primary border-ma'
                          data-toggle="modal" data-target="#myModal"
                        >
                          <i className='fa fa-cart-plus mr-2' style={{ fontSize: '20px' }}></i>New Product
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
                                <th><i className='fa fa-square-o'></i></th>
                                <th>Image</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Stock</th>
                                <th>Supplier Price</th>
                                <th>Target Price</th>
                                <th>Profit</th>
                                <th><button className='btn'><i className='fa fa-trash-o'></i></button></th>
                              </tr>
                            </thead>
                            <tbody>
                              {products.map((product, index) =>
                                <tr key={index}>
                                  <td><i className='fa fa-check-square-o'></i></td>
                                  <td><img alt='SETIMAGE' src={product.image} width='90px' height='60px' /></td>
                                  <td>{product.id}</td>
                                  <td>
                                    <div className='td-some-width'>
                                      {product.name}
                                    </div>
                                  </td>
                                  <td><div className={`badge-ma ${product.stock === 'out' ? 'badge-ma-danger' : 'badge-ma-success'}`}>{product.stock === 'out' ? 'Out of Stock' : 'In Stock'}</div></td>
                                  <td>{product.supplierPrice} $</td>
                                  <td>{product.targetPrice} $</td>
                                  <td>{(product.targetPrice - product.supplierPrice).toFixed(2)} $</td>
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
      <ProductCreate />
    </div>
  )
}

export default Products