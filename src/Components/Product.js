import { FaTimes, FaBeer } from "react-icons/fa";

const Product = ({ item, onAdd, onRemove, isCart }) => {
  return (
    <div className="cart">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/tea-4548634-3773222.png"
        alt="imgage"
        border="0"
        width="100px"
        className="img"
        class="card-img-top img-fluid"
      />
      {item.qty > 0 && <h1>{item.qty}</h1>}
      <h3>
        {item.name}
        {!isCart ? (
          <button
            onClick={() => onAdd(item.id)}
            style={{
              width: "40px",
              color: "green",
              cursor: "pointer",
              padding: "3px"
            }}
          >
            {" "}
            Add
          </button>
        ) : (
          ""
        )}
      </h3>
      <p>
        Price : {item.price}
        <button
          onClick={() => onRemove(item.id)}
          style={{
            width: "60px",
            color: "red",
            cursor: "pointer",
            padding: "3px"
          }}
        >
          Remove
        </button>
      </p>
    </div>
  );
};
export default Product;
