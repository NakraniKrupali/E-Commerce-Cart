import Product from "./Product";

const Products = ({ items, onAdd, onRemove, isCart }) => {
  return (
    <>
      {items.map((item) =>
        isCart ? (
          item.qty > 0 ? (
            <Product
              item={item}
              isCart={isCart}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ) : (
            ""
          )
        ) : (
          <Product item={item} onAdd={onAdd} onRemove={onRemove} />
        )
      )}
    </>
  );
};
Products.defaultProps = {
  color: "steelblue",
  isCart: false
};
export default Products;
