import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import Tiles from '../common/Tiles'
import UserItem from '../common/UserItem'
import PieChart from '../common/PieChart'
import LineChart from '../common/LineChart'

const tiles = [
  {
    title: 'NET SALES',
    content: '3570 $'
  },
  {
    title: 'GROSS SALES',
    content: '6756 $'
  },
  {
    title: 'PRODUCTS SOLD',
    content: '640'
  },
  {
    title: 'ORDERS FULFILLED',
    content: '435'
  },
]

const showUser = {
  imgSrc: '/img/temp-user.png',
  title: 'Gabriela',
  detail: 'store manager'
}

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
              <div className='col-lg-9 col-md-6'>
                <LineChart />
              </div>
              <div className='col-lg-3 col-md-6'>
                <UserItem imgSrc={showUser.imgSrc} title={showUser.title} detail={showUser.detail} />
                <PieChart title='suppliers' />
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