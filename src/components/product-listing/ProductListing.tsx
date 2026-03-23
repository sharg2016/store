import ProductCard from '../product-card/ProductCard';
import type {Product} from '../product-card/ProductCard';
import "./ProductListing.css";

interface ProductListingProps{
  products : Product[];   
}

const ProductListing : React.FC<ProductListingProps> = ({products}) => {
  return (
    <div className='sticker-shop-product-listing'>
        <div className='sticker-shop-listing-grid'>
            {products.length>0 ? (
            products.map((product) => (
                <ProductCard key={product.productId}  product={product} />
            )
            )): (
            <p className='sticker-shop-listing-empty'> No products to show.</p> 
        )}
        </div>
    </div>
  );
}

export default ProductListing;