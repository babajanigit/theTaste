import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartAddItem, cartRemoveItem } from '../../../../redux/cart/cartAction';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cartSelector';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './style.css'

const MenuItem = ({ item, cartCount, cartList, cartAddItem, cartRemoveItem }) => {
  const { id, name, info, price, img } = item;
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);

      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };
  return (
    <div className='item'>
      <img src={img} alt="food" />
      <div className="item-head_disc">
      <p className='head_desc-name'>{name}</p>
      <p className='head_desc-info'>
        <small>{info}</small>
      </p></div>
      <div className="item-foot_desc">
        <span className='foot-desc_price'>
          <i className="fa-solid fa-indian-rupee-sign"></i>{price}
        </span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
