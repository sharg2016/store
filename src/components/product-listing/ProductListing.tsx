import React from 'react';
import ProductCard from '../product-card/ProductCard';
import productsData from '../../data/products'; // Import for type reference

interface ProductListingProps {
  products: typeof productsData[number][];
}

function ProductListing({products}: ProductListingProps) {
  return (
    <div className='sticker-shop-product-listing'>
        <div className='sticker-shop-listing-grid'>
            {products.length>0 ?
            products.map((product) => (
                <ProductCard key={product.productid}  product={product} />
            ))    
        }
        </div>

    </div>
  );
};

export default ProductListing;