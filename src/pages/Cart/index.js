import React from 'react';
import './style.css';
import Logo from '../../components/Common/Logo';
import Menu from '../../components/Common/Menu';
import Footer from '../../components/Common/Footer';
import EmptyCart from '../../components/Cart/EmptyCart';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cartSelector';

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount===0 ? <EmptyCart /> :

        <div className="orders">
          <h1 className='orders-heading'>Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className='orders-total'>Your Total <i className="fa-solid fa-indian-rupee-sign"></i>{cartTotal}</h3>
        </div>
      }
      <Footer />
    </>
  )
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(Cart)
