import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductCard.css";

export  interface Product{
  productId?: number;
  name?: string;
  description ?: string;
  price?: number;
  popularity ?: string;
  imageUrl?: string;
}

interface ProductCardProps {
  product : Product;
}

const ProductCard: React.FC<ProductCardProps> =({product}) => {
  return (
    <div className="sticker-shop-product-card">
      <div className="sticker-shop-product-image-container">
        <img src={product.imageUrl} alt={product.name} className="sticker-shop-product-image"/>
      </div>
      <div className="sticker-shop-product-details">
          <h2 className="sticker-shop-product-name"> {product.name} </h2>
          <p className="sticker-shop-product-description"> {product.description} </p>
      </div>
      <div className="sticker-shop-product-price-container">
        <div className="sticker-shop-product-popularity">
          <FontAwesomeIcon icon={faFire} />
          {product.popularity}
        </div>
        <div className="sticker-shop-product-price">
           <p>USD</p>
           {product.price}
        </div>
      </div>
      <div className="sticker-shop-product-button-container">
        <button className="sticker-shop-product-button-cart" onClick={(e)=> alert("added to cart")}>Add Cart</button>
        <button className="sticker-shop-product-button-buy" onClick={(e)=>alert("button clicked")}> Buy </button>
      </div>
    </div>
  )
}

export default ProductCard;