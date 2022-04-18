import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className='bg-ma-grey h-100 container-fluid'>
      <div className='row justify-content-center'>
        <div className='mt-3 pt-4'>
          <div className='col-12'>
            <img alt='SETIMAGE' className='img-fluid' src='/img/meta-logo-auth.jpg' />
          </div>
          <div className='d-flex justify-content-center'>
            <div className='m-5 p-4 bg-white border rounded-xl shadow auth-card'>
              <h1 className="large text-ma-auth h2-ma mb-4">Sign In</h1>
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label className='text-ma-primary h4-ma'>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className='form-control'
                    required
                  />
                </div>
                <div className="form-group">
                  <label className='text-ma-primary h4-ma'>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className='form-control'
                    minLength="6"
                  />
                </div>
                <div className='form-group d-flex justify-content-between'>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" value="" />Remember Me
                    </label>
                  </div>
                  <Link to="/forgotPassword" className="form-label h4-ma text-ma-primary">Forgot password?</Link>
                </div>
                <div className="form-group">
                  <button
                    type='submit'
                    className='form-control h4-ma text-ma-auth'
                  >
                    Sign In <i className='fa fa-long-arrow-right'></i><span></span>
                  </button>
                </div>
              </form>
              <p className="my-1 h4-ma text-ma-auth">
                Don't have an account? <Link to="/register" className='h4-ma text-ma-primary'>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
