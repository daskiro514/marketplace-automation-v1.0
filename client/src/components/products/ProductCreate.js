import React from 'react'

const ProductCreate = () => {

  const [currentTab, setCurrentTab] = React.useState('pricing')

  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ borderBottom: 'solid 1px #BFD7EA' }}>
            <h4 className="modal-title font-bold text-ma-primary font-weight-bold">Create a Product</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-header p-1" style={{ borderBottom: 'solid 1px #BFD7EA' }}>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-3 p-1'>
                  <button className={`btn w-100 border-ma text-ma-primary ${currentTab === 'pricing' ? 'bg-ma-primary text-white' : 'bg-ma-secondary'}`} onClick={() => setCurrentTab('pricing')}>
                    <div className='d-flex align-items-center justify-content-center text-ma-detail'>
                      <img alt='SETIMAGE' className='mr-2' src={`/img/product-pricing${currentTab === 'pricing' ? '-active' : ''}.png`} width='25' height='25' />
                      <span>PRICING</span>
                    </div>
                  </button>
                </div>
                <div className='col-md-3 p-1'>
                  <button className={`btn w-100 border-ma text-ma-primary ${currentTab === 'description' ? 'bg-ma-primary text-white' : 'bg-ma-secondary'}`} onClick={() => setCurrentTab('description')}>
                    <div className='d-flex align-items-center justify-content-center text-ma-detail'>
                      <img alt='SETIMAGE' className='mr-2' src={`/img/product-description${currentTab === 'description' ? '-active' : ''}.png`} width='20' height='25' />
                      <span>DESCRIPTION</span>
                    </div>
                  </button>
                </div>
                <div className='col-md-3 p-1'>
                  <button className={`btn w-100 border-ma text-ma-primary ${currentTab === 'image' ? 'bg-ma-primary text-white' : 'bg-ma-secondary'}`} onClick={() => setCurrentTab('image')}>
                    <div className='d-flex align-items-center justify-content-center text-ma-detail'>
                      <img alt='SETIMAGE' className='mr-2' src={`/img/product-image${currentTab === 'image' ? '-active' : ''}.png`} width='25' height='25' />
                      <span>IMAGES</span>
                    </div>
                  </button>
                </div>
                <div className='col-md-3 p-1'>
                  <button className={`btn w-100 border-ma text-ma-primary ${currentTab === 'category' ? 'bg-ma-primary text-white' : 'bg-ma-secondary'}`} onClick={() => setCurrentTab('category')}>
                    <div className='d-flex align-items-center justify-content-center text-ma-detail'>
                      <img alt='SETIMAGE' className='mr-2' src={`/img/product-category${currentTab === 'category' ? '-active' : ''}.png`} width='25' height='25' />
                      <span>CATEGORY</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body p-1 pb-5">
            <div className='container-fluid'>
              {currentTab === 'pricing' ?
                <div className='row'>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Supplier Link
                  </div>
                  <div className='col-md-9 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                  <div className='col-md-3 mb-2'>
                    <button className='w-100 btn border-ma bg-ma-secondary'>Pull Supplier Info</button>
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Supplier Price
                  </div>
                  <div className='col-12 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Markup
                    </div>
                    <div className='col-12'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Margin (%)
                    </div>
                    <div className='col-12'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Target Price
                    </div>
                    <div className='col-12'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Profit
                    </div>
                    <div className='col-12'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Stock
                    </div>
                    <div className='col-12'>
                      <select className='form-control bg-ma-input border-ma'>
                        <option></option>
                        <option>In Stock</option>
                        <option>Out of Stock</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Quantity
                    </div>
                    <div className='col-12'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                  </div>
                </div>
                : null
              }
              {currentTab === 'description' ?
                <div className='row'>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Product Title
                  </div>
                  <div className='col-12 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Template
                    </div>
                    <div className='col-12'>
                      <select className='form-control bg-ma-input border-ma'>
                        <option></option>
                      </select>
                    </div>
                  </div>
                  <div className='col-md-6 mb-2 p-0'>
                    <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                      Brand
                    </div>
                    <div className='col-12'>
                      <input className='form-control bg-ma-input border-ma' />
                    </div>
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Header
                  </div>
                  <div className='col-12 mb-2'>
                    <textarea className='form-control bg-ma-input border-ma' rows={5} />
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Description
                  </div>
                  <div className='col-12 mb-2'>
                    <textarea className='form-control bg-ma-input border-ma' rows={5} />
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Footer
                  </div>
                  <div className='col-12 mb-2'>
                    <textarea className='form-control bg-ma-input border-ma' rows={5} />
                  </div>
                </div>
                : null
              }
              {currentTab === 'image' ?
                <div className='row'>
                  <div className='col-12 my-4'>
                    <img alt='SETIMAGE' className='img-fluid' src='/img/image-plus.png' />
                  </div>
                </div>
                : null
              }
              {currentTab === 'category' ?
                <div className='row'>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Facebook Category
                  </div>
                  <div className='col-12 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Amazon Category
                  </div>
                  <div className='col-12 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Google Category
                  </div>
                  <div className='col-12 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Ebay Category
                  </div>
                  <div className='col-12 mb-2'>
                    <input className='form-control bg-ma-input border-ma' />
                  </div>
                </div>
                : null
              }
            </div>
          </div>
          <div className="modal-footer" style={{ borderTop: 'solid 1px #BFD7EA' }}>
            <button type="button" className="btn badge-ma-danger" data-dismiss="modal" style={{ width: '100px' }}>
              <i className='fa fa-times-circle-o mr-2'></i>
              Cancel
            </button>
            <button type="button" className="btn badge-ma-success" data-dismiss="modal" style={{ width: '100px' }}>
              <i className='fa fa-check-circle-o mr-2'></i>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCreate