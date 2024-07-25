import {} from "react";
import "./cart.css";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../services/CartSlice";

const CartItem = ({ items, onContinueShopping, totalCost }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (name) => {
    const item = items.find((item) => item.name === name);
    if (item) {
      dispatch(updateQuantity({ name, quantity: item.quantity + 1 }));
    }
  };

  const handleDecreaseQuantity = (name) => {
    const item = items.find((item) => item.name === name);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ name, quantity: item.quantity - 1 }));
    }
  };

  const handleDeleteItem = (name) => {
    dispatch(removeItem(name));
  };

  return (
    <div className="cart-container">
      <h2 className="shopping-cart-heading">Your Shopping Cart</h2>
      <div className="cart-divider"></div>
      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="item-detail">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>
                  Cost: <strong>{item.cost}</strong>
                </p>
              </div>
              <div className="item-card-icon">
                <IconButton
                  style={{ color: "#45a049" }}
                  onClick={() => handleDecreaseQuantity(item.name)}
                >
                  <RemoveIcon />
                </IconButton>
                <span>{item.quantity}</span>
                <IconButton
                  style={{ color: "#45a049" }}
                  onClick={() => handleIncreaseQuantity(item.name)}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  style={{ color: "#45a049" }}
                  onClick={() => handleDeleteItem(item.name)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="cart-divider"></div>
      <h6 className="total-cost">
        Total Cost: <strong>${totalCost}</strong>
      </h6>
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
};

export default CartItem;
