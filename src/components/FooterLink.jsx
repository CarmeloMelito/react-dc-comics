import FacebookImg from "../assets/img/facebookimg.png";
import TwitterImg from "../assets/img/footer-twitter.png";
import YoutubeImg from "../assets/img/footer-youtube.png";
import PinterestImg from "../assets/img/footer-pinterest.png";
import PeriscopeImg from "../assets/img/footer-periscope.png";

function FooterLink() {
  return (
    <div className="links">
      <button className="button-sign">Sign-Up Now</button>

      <div className="social">
        <a href="#" className="follow">
          Follow Us
        </a>
        <a href="#">
          <img src={FacebookImg} alt="facebook" />
        </a>
        <a href="#">
          <img src={TwitterImg} alt="twitter" />
        </a>
        <a href="#">
          <img src={YoutubeImg} alt="youtube" />
        </a>
        <a href="#">
          <img src={PinterestImg} alt="pinterest" />
        </a>
        <a href="#">
          <img src={PeriscopeImg} alt="periscope" />
        </a>
      </div>
    </div>
  );
}
export default FooterLink;
