import ImgAtm from "../components/atom/ImgAtm";
import TitleAtm from "../components/atom/TitleAtm";
import TextAtm from "../components/atom/TextAtm";

import mainImg from "../assets/images/main.png";
import mainImg2 from "../assets/images/main2.png";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
// import slide4 from "../assets/images/slide4.png";
import intro1 from "../assets/images/intro1.png";
import intro2 from "../assets/images/intro2.png";
import intro3 from "../assets/images/intro3.png";
import intro4 from "../assets/images/intro4.png";

const MainPg = () => {
  const slideLists = [
    { img: slide1 },
    { img: slide2 },
    { img: slide3 },
    // { img: slide4 },
  ];

  const introLists = [
    { img: intro1 },
    { img: intro2 },
    { img: intro3 },
    { img: intro4 },
  ];
  return (
    <section id="main">
      <div className="title">
        <div className="intro_txt position-relative">
          <TitleAtm titleProp="Welcome" />
          <TitleAtm titleProp="Lee Family" />
          <TextAtm textProp="Without you, I have never existed." />
          <div className="intro_img d-flex">
            {introLists.map((v, i) => (
              <ImgAtm key={i} srcProp={v.img} altProp={`${v.img} 이미지`} />
            ))}
          </div>
        </div>
      </div>
      <div className="main_img d-flex justify-content-center align-items-center">
        <ImgAtm srcProp={mainImg} altProp="메인 가족 사진" />
        <ImgAtm srcProp={mainImg2} altProp="메인 가족 사진" />
      </div>
      <div className="slider_all mx-auto position-relative">
        <div className="slider_img mx-auto d-flex justify-content-center position-absolute">
          {slideLists.map((v, i) => (
            <div className="slider position-absolute" key={i}>
              <ImgAtm srcProp={v.img} altProp={`${v.img} 이미지`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MainPg;
