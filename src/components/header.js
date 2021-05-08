import ImgMobile from "../assets/images/bg-header-mobile.svg";
import ImgDesktop from "../assets/images/bg-header-desktop.svg";

function Header() {
  return (
    <div className="header__container">
      <picture>
        <source media="(min-width: 375px)" srcSet={ImgDesktop} />
        <source media="(min-width: 350px)" srcSet={ImgMobile} />
        <img className="top-img" src={ImgDesktop} alt="blue-background" />
      </picture>
    </div>
  );
}

export default Header;
