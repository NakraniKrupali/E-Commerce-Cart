import { GrCart, FaTimes, FaDev } from "react-icons/gr";

const Button = ({ text, flag }) => {
  return (
    <>
      <div className="btn">
        {flag && <GrCart style={{ color: "white", cursor: "pointer" }} />}
        &nbsp; {text}
      </div>
    </>
  );
};

export default Button;
