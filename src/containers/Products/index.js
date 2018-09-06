import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { getProducts, isLoading, loadFailed } from './selectors';
import store from '../../store';
import productReducer from './reducers';
import { registerReducer } from '../../reducers';
import { loadProducts } from './actions';

class Products extends React.Component {
  componentDidMount() {
    registerReducer(store, 'products', productReducer);
    this.props.loadProducts('resources/products.json');
  }

  render() {
    const { isLoading, products, loadFailed } = this.props;
    let listItems = <div />;

    if (!isLoading) {
      listItems = (products || []).map((product, index) => {
        return (
          <li key={product.id}>
            {index + 1}. {product.name}
          </li>
        );
      });
    }

    return (
      <div>
        <header>
          <Typography variant="headline" gutterBottom>
            Products Gallery
          </Typography>
        </header>

        <div className="list">
          {loadFailed && (
            <div>
              <Typography variant="">
                `An error occurred while trying to load products. Please try
                again.`
                <Button color="primary">Reload</Button>
              </Typography>
            </div>
          )}
          {!loadFailed && <ul>{listItems}</ul>}
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loadProducts: PropTypes.func,
  isLoading: PropTypes.bool,
  loadFailed: PropTypes.bool
};

const mapStateToProps = state => ({
  products: getProducts(state),
  isLoading: isLoading(state),
  loadFailed: loadFailed(state)
});

const mapDispatchToProps = dispatch => {
  return {
    loadProducts: url => dispatch(loadProducts(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
