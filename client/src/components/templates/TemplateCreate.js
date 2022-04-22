import React from 'react'

const TempalteCreate = () => {

  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header" style={{ borderBottom: 'solid 1px #BFD7EA' }}>
            <h4 className="modal-title font-bold text-ma-primary font-weight-bold">Create a Product</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body p-1 pb-5">
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                  Name
                </div>
                <div className='col-12 mb-2'>
                  <input className='form-control bg-ma-input border-ma' />
                </div>
                <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                  Quantity
                </div>
                <div className='col-12 mb-2'>
                  <input className='form-control bg-ma-input border-ma' />
                </div>
                <div className='col-md-6 mb-2 p-0'>
                  <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                    Markup
                  </div>
                  <div className='col-12'>
                    <select className='form-control bg-ma-input border-ma'>
                      <option></option>
                    </select>
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
                <div className='col-12 text-ma-primary h4-ma my-2 font-weight-bold'>
                  Header
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

export default TempalteCreate