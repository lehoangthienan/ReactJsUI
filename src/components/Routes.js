import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/createproduct' component={CreateProduct} />
        <Route path='/updateproduct' component={UpdateProduct} />
        <Route path='/deleteproduct' component={DeleteProduct} />
      </Switch>
    );
  }
}

export default Routes;
