import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import Alert from '../layout/Alert'
import NotFound from '../layout/NotFound'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Dashboard from '../dashboard/Dashboard'
import Products from '../products/Products'
import Templates from '../templates/Templates'
import BulkUploader from '../bulk-uploader/BulkUploader'
import Orders from '../orders/Orders'
import Settings from '../settings/Settings'

const Routes = props => {
  return (
    <>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/templates" component={Templates} />
        <PrivateRoute path="/bulk-uploader" component={BulkUploader} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default Routes
