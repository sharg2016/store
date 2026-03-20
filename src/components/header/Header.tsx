import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
    return (
        <header className="sticker-shop-header">
             <div className="sticker-shop-header-container"> 
                <a href="/" className="sticker-shop-header-link">
                    <FontAwesomeIcon icon={faTags} className="sticker-shop-header-faIcon" />
                    <span className="sticker-shop-header-brand-title">Exp Sticker</span>
                </a>
                <nav className="sticker-shop-header-nav">
                    <a href="/home" className="sticker-shop-header-navlink">
                    Home                     
                    </a>
                    <a href="/about" className="sticker-shop-header-navlink">
                        About                  
                    </a>
                    <a href="/contact" className="sticker-shop-header-navlink">
                        Contact               
                    </a>
                    <a href="/login" className="sticker-shop-header-navlink">
                        Login                    
                    </a>
                    <a href="/cart" className="sticker-shop-header-navlink">
                        <FontAwesomeIcon icon={faShoppingBasket}/>           
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header; 