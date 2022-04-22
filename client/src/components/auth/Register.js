import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    password: '',
    password2: ''
  })

  const { firstName, lastName, email, organization, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register(formData)
    }
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
              <h1 className="large text-ma-auth h2-ma mb-4">Sign Up</h1>
              <form className="form" onSubmit={onSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="form-group">
                      <label className='text-ma-primary h4-ma'>First Name</label>
                      <input
                        name="firstName"
                        value={firstName}
                        onChange={onChange}
                        className='form-control bg-ma-input'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="form-group">
                      <label className='text-ma-primary h4-ma'>Last Name</label>
                      <input
                        name="lastName"
                        value={lastName}
                        onChange={onChange}
                        className='form-control bg-ma-input'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="form-group">
                      <label className='text-ma-primary h4-ma'>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        className='form-control bg-ma-input'
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="form-group">
                      <label className='text-ma-primary h4-ma'>Organization Name</label>
                      <input
                        name="organization"
                        value={organization}
                        onChange={onChange}
                        className='form-control bg-ma-input'
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="form-group">
                      <label className='text-ma-primary h4-ma'>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className='form-control bg-ma-input'
                        minLength="6"
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="form-group">
                      <label className='text-ma-primary h4-ma'>Confirm Password</label>
                      <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        className='form-control bg-ma-input'
                        minLength="6"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group pt-4">
                  <button
                    type='submit'
                    className='form-control bg-ma-secondary h4-ma text-ma-auth'
                  >
                    Sign Up <i className='fa fa-long-arrow-right'></i><span></span>
                  </button>
                </div>
              </form>
              <p className="my-1 h4-ma text-ma-auth pt-4">
                Already have an account? <Link to="/login" className='h4-ma text-ma-primary'>Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
