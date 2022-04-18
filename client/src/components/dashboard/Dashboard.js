import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import Tiles from '../common/Tiles'
import UserItem from '../common/UserItem'
import PieChart from '../common/PieChart'
import LineChart from '../common/LineChart'

const tiles = [
  { title: 'NET SALES', content: '3570 $' },
  { title: 'GROSS SALES', content: '6756 $' },
  { title: 'PRODUCTS SOLD', content: '640' },
  { title: 'ORDERS FULFILLED', content: '435' },
]

const showUser = {
  imgSrc: '/img/temp-user.png',
  title: 'Gabriela',
  detail: 'store manager'
}

const orders = [
  { id: '153164', status: 'Pending', customer: 'Josue Monterio', totalItems: 1, totalAmount: 13.95, date: '11 Jan 2022' },
  { id: '153163', status: 'Canceled', customer: 'German Arrunfat', totalItems: 1, totalAmount: 163.5, date: '11 Jan 2022' },
  { id: '153162', status: 'Shipped', customer: 'Timothy Gann', totalItems: 21, totalAmount: 135.9, date: '10 Jan 2022' },
  { id: '153161', status: 'Complete', customer: 'David Mathews', totalItems: 213, totalAmount: 11.05, date: '10 Jan 2022' }
]

const sales = [
  { imgSrc: '/img/cart-total.png', amount: '37', detail: 'total products' },
  { imgSrc: '/img/cart-out.png', amount: '2', detail: 'out of stocks' },
  { imgSrc: '/img/cart-sell.png', amount: '32.99 $', detail: 'average sell price' },
  { imgSrc: '/img/cart-buy.png', amount: '16.52 $', detail: 'average buy price' },
]

const Dashboard = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className='col-lg-10 col-md-9'>
          <div className='p-4 bg-ma-grey h-100'>
            <Header />
            <Tiles tiles={tiles} />
            <div className='row'>
              <div className='col-lg-9'>
                <LineChart />
              </div>
              <div className='col-lg-3'>
                <UserItem imgSrc={showUser.imgSrc} title={showUser.title} detail={showUser.detail} />
                <PieChart title='suppliers' />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-9 col-md-6'>
                <div className='bg-white rounded-xl my-2 shadow'>
                  <div className='p-4'>
                    <div className='h4-ma text-ma-primary'>Orders</div>
                    <div className='text-ma-secondary text-ma-detail'>Most recent orders</div>
                  </div>
                  <div className='table-responsive'>
                    <table className='table text-ma-primary text-ma-detail'>
                      <thead>
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
                          <tr key={index}>
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
              <div className='col-lg-3 col-md-6'>
                <div className='bg-white rounded-xl py-3 px-2 my-2 shadow'>
                  {sales.map((item, index) =>
                    <div key={index} className='d-flex align-items-center my-3'>
                      <img alt='SETIMAGE' className='img-fluid' width='60' height='60' src={item.imgSrc} />
                      <div className='ml-3'>
                        <div className='h3-ma text-ma-primary'>{item.amount}</div>
                        <div className='text-ma-secondary text-ma-detail text-uppercase'>{item.detail}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
})


export default connect(mapStateToProps, {})(Dashboard)