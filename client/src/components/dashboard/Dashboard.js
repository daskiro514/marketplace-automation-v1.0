import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

const Dashboard = ({logout}) => {

  return (
    <div>
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
})


export default connect(mapStateToProps, {logout})(Dashboard)