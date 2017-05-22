import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/CartActions';
import PhotoList from '../components/CartList';
import Cart from '../components/Cart';
@connect(state => ({
  photos: state.photos.photos,
  selecteditems: state.photos.selecteditems,
}))
export default class SearchApp extends Component {
  static propTypes = {
    photos: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  }
  render() {
    const actions = bindActionCreators(action, this.props.dispatch);

    return (
      <div>
        <div className="container-fluid zero-gutter">
          <div className="col-xs-9 product-list zero-gutter">
          <PhotoList actions={actions} photos={this.props.photos} />
            </div>
          <div className="col-xs-3">
            {this.props.selecteditems.length > 0 ? <Cart actions={actions} list={this.props.selecteditems} /> : null}
            </div>
        </div>
      </div>
    );
  }
}
