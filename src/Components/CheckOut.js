import Button from "./Button";
const CheckOut = ({ tQty, tAmt, onCheckOut }) => {
  return (
    <div className="container">
      {tQty > 0 ? (
        <>
          <h2>CheckOut</h2>
          <h3>Total Items : {tQty} </h3>
          <h3>Total Amount: ₹{tAmt}</h3>
          <br />
          <br />
          <button
            onClick={() => {
              onCheckOut();
            }}
            style={{
              width: "100px",
              color: "green",
              cursor: "pointer",
              padding: "3px"
            }}
          >
            CheckOut
          </button>
        </>
      ) : (
        <h2>Thank you for the purchase!</h2>
      )}
    </div>
  );
};
export default CheckOut;
