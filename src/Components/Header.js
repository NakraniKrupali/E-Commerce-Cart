import "../index.css";
import { Link } from "react-router-dom";
import Button from "./Button";
const Header = ({ tQty }) => {
  return (
    <header class="header">
      <h1>
        <center>E-Commerce Cart</center>
      </h1>
      <Link to="/cart">
        <Button text={tQty} flag="true" />
      </Link>
    </header>
  );
};
export default Header;
