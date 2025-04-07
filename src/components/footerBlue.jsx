import ComicsImg from "../assets/img/digital-comics.png";
import MerchandisingImg from "../assets/img/merchandise.png";
import subImg from "../assets/img/subscriptions.png";
import shopImg from "../assets/img/shop.png";
import powerImg from "../assets/img/power.svg";

function FooterBlue() {
  return (
    <div className="footer-blue">
      <a href="#" className="element">
        <img src={ComicsImg} alt="digital comics" />
        <p>Digital Comics</p>
      </a>
      <a href="#" className="element">
        <img src={MerchandisingImg} alt="Merchandise" />
        <p>Dc Merchandise</p>
      </a>
      <a href="#" className="element">
        <img src={subImg} alt="Subscription" />
        <p>Subscription</p>
      </a>
      <a href="#" className="element">
        <img src={shopImg} alt="Shop " />
        <p>Comic Shop Locator</p>
      </a>
      <a href="#" className="element">
        <img src={powerImg} alt="Power Visa" />
        <p>Dc Power Visa</p>
      </a>
    </div>
  );
}

export default FooterBlue;
