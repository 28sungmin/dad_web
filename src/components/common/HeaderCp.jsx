import { Link } from "react-router-dom";
import menuData from "../../assets/data/menu.json";

import ImgAtm from "../atom/ImgAtm";

import logoImg from "../../assets/images/title.png";

const HeaderCp = () => {
  const menuLists = menuData.data;
  return (
    <header
      id="header"
      className="h-60 mx-auto d-flex justify-content-btween align-items-center"
    >
      <div className="logo">
        <Link to="/">
          <ImgAtm srcProp={logoImg} altProp="가족 로고" />
        </Link>
      </div>
      <div className="menu">
        <ul className="d-flex">
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
export default HeaderCp;
