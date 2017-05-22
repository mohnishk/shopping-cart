import React, { Component, PropTypes } from 'react';

export default class PhotoList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    photos: PropTypes.array,
  };

  constructor(props){
    super(props);
    this.props.actions.getcartproducts();
  }

    selectItem(item) {
        this.props.actions.selectproduct(item)
    }

  render() {
    return (
      <div>
        <div className="col-xs-12">
          {
              this.props.photos.map((item, index) => {
                return (
                  <div className="col-md-3 text-center mar15" key={`PhotoItem_${item.id}_${index}`}>
                      <div className="image-item">
                    <img src={item.imgSrc}  />
                          <h4 className="pull-left">{item.itemName}</h4>
                          <h5 className="pull-right">${item.price}</h5> <h6>{item.quantityRemaining} in stock</h6>
                          <button onClick={this.selectItem.bind(this, item)}  className="btn btn-success">Add to cart</button>
                          </div>
                  </div>
                );
              })
          }
          <div className="clearfix" />
        </div>


      </div>
    );
  }
}
