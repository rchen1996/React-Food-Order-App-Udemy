import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentAmt, item) => {
    return currentAmt + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
