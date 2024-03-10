import logo from "../images/main_590-removebg-preview.png";
import colorLogo from "../images/main_590-removebg-preview.png";

const Nav = ({ minimal }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : logo} />
      </div>
    </nav>
  );
};

export default Nav;
