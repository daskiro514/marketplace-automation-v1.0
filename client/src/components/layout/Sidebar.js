import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/auth'
import { setCurrentPage } from '../../actions/page'

const Sidebar = ({ logout, setCurrentPage, currentPage }) => {

  return (
    <div className='col-lg-2 col-md-3 sidebar p-0 bg-ma-primary'>
      <div className='px-4 pt-2'>
        <img alt='SETIMAGE' className='img-fluid' src='/img/meta-logo-dashboard.jpg' />
      </div>
      <hr />
      <div className='px-2'>
        <Link to='/dashboard' className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'dashboard' ? 'selected' : '')} onClick={() => setCurrentPage('dashboard')}>
          <div className='d-flex align-items-center'>
            <img alt='SETIMAGE' src={currentPage === 'dashboard' ? '/img/sidebar/dashboard-active.png' : '/img/sidebar/dashboard.png'} />
            <div>Dashboard</div>
          </div>
        </Link>
        <Link to='/products' className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'products' ? 'selected' : '')} onClick={() => setCurrentPage('products')}>
          <div className='d-flex align-items-center'>
            <img alt='SETIMAGE' src={currentPage === 'products' ? '/img/sidebar/products-active.png' : '/img/sidebar/products.png'} />
            <div>Products</div>
          </div>
        </Link>
        <Link to='/templates' className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'templates' ? 'selected' : '')} onClick={() => setCurrentPage('templates')}>
          <div className='d-flex align-items-center'>
            <img alt='SETIMAGE' src={currentPage === 'templates' ? '/img/sidebar/templates-active.png' : '/img/sidebar/templates.png'} />
            <div>Templates</div>
          </div>
        </Link>
        <Link to='/bulk-uploader' className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'bulk-uploader' ? 'selected' : '')} onClick={() => setCurrentPage('bulk-uploader')}>
          <div className='d-flex align-items-center'>
            <img alt='SETIMAGE' src={currentPage === 'bulk-uploader' ? '/img/sidebar/bulk-uploader-active.png' : '/img/sidebar/bulk-uploader.png'} />
            <div>Bulk Uploader</div>
          </div>
        </Link>
        <Link to='/orders' className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'orders' ? 'selected' : '')} onClick={() => setCurrentPage('orders')}>
          <div className='d-flex align-items-center'>
            <img alt='SETIMAGE' src={currentPage === 'orders' ? '/img/sidebar/orders-active.png' : '/img/sidebar/orders.png'} />
            <div>Orders</div>
          </div>
        </Link>
        <Link to='/settings' className={'row mx-1 h5 menuItem rounded p-1 ' + (currentPage === 'settings' ? 'selected' : '')} onClick={() => setCurrentPage('settings')}>
          <div className='d-flex align-items-center'>
            <img alt='SETIMAGE' src={currentPage === 'settings' ? '/img/sidebar/settings-active.png' : '/img/sidebar/settings.png'} />
            <div>Settings</div>
          </div>
        </Link>
      </div>


      <div className='signoutLink top-border p-2 pt-3'>
        <div className='row mx-1 h5 menuItem rounded p-1' onClick={() => {
          setCurrentPage('dashboard')
          logout()
        }}>
          <div className='d-flex align-items-center'>
            <i className='fa fa-sign-out'></i>
            <div>Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPage: state.page.currentPage
})


export default connect(mapStateToProps, { logout, setCurrentPage })(Sidebar)