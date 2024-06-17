import { Link } from "react-router-dom";
import menuData from "../../assets/data/menu.json";

import ImgAtm from "../atom/ImgAtm";

import logoImg from "../../assets/images/title.png";

const NavCp = () => {
  const menuLists = menuData.data;
  return (
    <header id="nav" className="position-fixed position-relative">
      <div className="logo position-absolute">
        <Link to="/">
          <ImgAtm srcProp={logoImg} altProp="가족 로고" />
        </Link>
      </div>
      <div className="menu position-absolute">
        <ul>
          {menuLists.map((v, i) => (
            <li key={i}>
              <Link to={v.link}>{v.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default NavCp;
