import {useContext} from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = ({cartItemDetails}) => {
  const {
    dishId,
    dishName,
    dishImage,
    quantity,
    dishCurrency,
    dishPrice,
    // apistatus,
  } = cartItemDetails
  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
    // apistatus
  } = useContext(CartContext)

  const onIncreaseQty = () => incrementCartItemQuantity(dishId)

  const onDecreaseQty = () => decrementCartItemQuantity(dishId)

  const onRemoveCartItem = () => removeCartItem(dishId)

  return (
    <li className="cart-item-container">
      <img className="cart-item-image" src={dishImage} alt={dishName} />
      <div className="cart-item-details">
        <p className="cart-item-name mb-1">{dishName}</p>
        <p className="dish-currency-prise mt-0 mb-2">
          {dishCurrency} {(quantity * dishPrice).toFixed(2)}
        </p>
        <div className="control-btn-group">
          <button type="button" className="control-btn" onClick={onDecreaseQty}>
            -
          </button>
          <p className="cart-item-quantity">{quantity}</p>
          <button type="button" className="control-btn" onClick={onIncreaseQty}>
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        className="remove-btn text-danger align-self-center"
        onClick={onRemoveCartItem}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default CartItem
