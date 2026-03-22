import React from 'react';
import PageTitle from '../page-title/PageTitle';
import "./Home.css";
import ProductListing from '../product-listing/ProductListing';


function Home() {
  return (
    <div className='sticker-shop-home'>
      <PageTitle title='Welcome to Exp Stickers' clickable={false} text='Search Your Favorite Stickers Here And Flex Everywhere.' />
      <ProductListing products={products}/>
    </div>
  )
}

export default Home;