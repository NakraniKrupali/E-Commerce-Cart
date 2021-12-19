import { Link } from "react-router-dom";
import Products from "./Products";
import CheckOut from "./CheckOut";
const Cart = ({ items, tQty, tAmt, onCheckOut, onRemove }) => {
  return (
    <>
      <div>
        <Link to="/">Go Back</Link>
        <CheckOut tQty={tQty} tAmt={tAmt} onCheckOut={onCheckOut} />
      </div>
      <div>
        {items.length > 0 ? (
          <Products isCart={true} items={items} onRemove={onRemove} />
        ) : (
          "No Products Available in Your Carts"
        )}
      </div>
    </>
  );
};

export default Cart;
