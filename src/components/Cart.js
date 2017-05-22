import React, { Component, PropTypes } from 'react';

export default class Cart extends Component {
    static propTypes = {
        actions: PropTypes.object,
        list: PropTypes.array
    };
    constructor(props){
        super(props)
    }
    incrementItem(i, type){
        this.props.actions.incrementItems(i, type)
    }
    deletecartItem(index){
        this.props.actions.deletecartItem(index)
    }
    emptyCart () {
        this.props.actions.emptyCart();
    }


    render(){
        let price = 0
            this.props.list.map((item, index) => {
               price += item.price * item.selectedCount;
            })
        return (
            <div className="col-xs-12">
                <h2>Shopping Cart</h2>
                <h6>{this.props.list.length} items in list</h6>
            <ul className="list-group">
                {
                    this.props.list.map((item, index) => {
                      return (
                          <li  className="list-group-item col-xs-12 pull-left">
                              <div className="pul--left incr-decr">
                                  <img  src={item.imgSrc} />
                                  <div className="pull-left"><button className="btn btn-default" onClick={this.incrementItem.bind(this, index, 'dec')}>-</button>
                                  <span>{item.selectedCount}</span>
                                  <button disabled={item.selectedCount >= item.quantityRemaining} onClick={this.incrementItem.bind(this, index, 'inc')} className="btn btn-default">+</button>
                              </div>
                                  <p className="price">${item.price}each = ${item.selectedCount*item.price}</p>
                                  <button className="btn btn-danger pull-right" onClick={this.deletecartItem.bind(this, index)}>&times;</button>
                              </div>
                          </li>
                        )
                    })
                }
                </ul>
                <hr className="col-xs-12"/>
                <p className="pull-right col-xs-12 text-right">Toatal :${price}
                </p>
                <button className="btn btn-danger pull-right" onClick={this.emptyCart.bind(this)}>Empty Cart</button>
                </div>

        )
    }

}