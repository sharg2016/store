import React from 'react';
import Price from '../price/Price';

interface Product {
  name?: string;
  price?: string | number;
  imageurl?: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({product}: ProductCardProps) {
  const handleCardClick = () => {
    alert(`Product clicked: ${product.name || 'Unnamed product'} ($${product.price})`);
  };

  return (
    <div className='sticker-shop-product-card' onClick={handleCardClick} style={{cursor: 'pointer'}}> 
      <div className='sticker-shop-product-image-container'>
          <img src={product.imageurl} alt={product.name} className='sticker-shop-product-image' />
      </div>
      <div className='sticker-shop-product-details'>
        <p className='sticker-shop-product-name'> {product.name}</p>
        <p className='sticker-shop-product-desc'> {product.description} </p>
        <div className='sticker-shop-product-footer'>
           <p className='sticker-shop-product-price'>
            <Price currency="$" price={product.price ?? 0}/>
             </p>

             <button onClick={(e) => { e.stopPropagation(); alert(`Buy clicked for ${product.name}!`); }}>Buy</button>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;