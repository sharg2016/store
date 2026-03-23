import products from '../../data/products';
import PageTitle from '../page-title/PageTitle';
import ProductListing from '../product-listing/ProductListing';
import "./Home.css";


function Home() {
  return (
    <div className='sticker-shop-home'>
      <PageTitle title='Welcome to Exp Stickers' clickable={false} text='Search Your Favorite Stickers Here And Flex Everywhere.' />
      <ProductListing products={products}/>
    </div>
  )
}

export default Home;