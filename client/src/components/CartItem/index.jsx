//import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { removeFromCart as REMOVE_FROM_CART, updateCartQuantity as UPDATE_CART_QUANTITY } from '../../app/store';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(
      REMOVE_FROM_CART({
        _id: item._id,
      })
    );
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(
        REMOVE_FROM_CART({
          _id: item._id,
        })
      );
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch(
        UPDATE_CART_QUANTITY({
          _id: item._id,
          purchaseQuantity: parseInt(value),
        })
      );
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input type="number" placeholder="1" value={item.purchaseQuantity} onChange={onChange} />
          <span role="img" aria-label="trash" onClick={() => removeFromCart(item)}>
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
