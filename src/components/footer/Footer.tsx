import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="sticker-shop-footer">
            Built with
            <FontAwesomeIcon icon={faHeart} className="sticker-shop-footer-heart"/>
            by
            <a href="www.stickershops.com" target="/blank" className="sticker-shop-footer-link"> Exp Stickers </a>
        </footer>
    )
};

export default Footer;