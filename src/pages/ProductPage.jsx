import React from 'react'
import SalesBanner from '../components/SalesBanner'
import Header from '../components/Header'
import DropDownMenu from '../components/DropDownMenu'
import ProductItem from '../components/ProductItem'
import NewsletterBanner from '../components/NewsletterBanner'
import Footer from '../components/Footer'
import './ProductPage.css'

function ProductPage() {
  return (
    <div className='flex w-full flex-col items-center productPageBox'>
        <SalesBanner />
        <Header />
        <div className="banner">
            <img src="./src/assets/productPageBanner.png" alt="banner" className='bannerImg' />
            <div className="bannerInfoBox">
                <p className="location">Home {'>'} <span className='lastLoc'>Shop</span></p>
                <p className="banTitle">Shop Page</p>
                <p className="ban">Let’s design the place you always imagined.</p>
            </div>
        </div>
        <div className="productListing">
            <div className="catBox">
                <DropDownMenu
                  title={'CATEGORIES'}
                  dropOptions={['Living room', 'Bathroom', 'Bedroom', 'Dining room']}
                />

                <DropDownMenu
                  title={'PRICE'}
                  dropOptions={['All Price', '1000 - 5000', '5000 - 10000', '10000+']}
                />
            </div>

            <div className="sortBox">
              <select name="" id="" className="sortBy">
                <option value="Sort by">Sort by</option>
                <option value="Relevance">Relevance</option>
                <option value="Popular">Popular</option>
                <option value="Low to High Price">Low to High Price</option>
                <option value="High to Low Price">High to Low Price</option>
                <option value="Newest First">Newest First</option>
              </select>

              <div className="viewOptionBox">
                <div className="gridBox">
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                  <div className="gridView gv">&nbsp;</div>
                </div>

                <div className="squareBox activeView">
                  <div className="gridView squareView active">&nbsp;</div>
                  <div className="gridView squareView active">&nbsp;</div>
                  <div className="gridView squareView active">&nbsp;</div>
                  <div className="gridView squareView active">&nbsp;</div>
                </div>

                <div className="colBox">
                  <div className="gridView">&nbsp;</div>
                  <div className="gridView">&nbsp;</div>
                </div>

                <div className="rowBox">
                  <div className="gridView colView">&nbsp;</div>
                  <div className="gridView colView">&nbsp;</div>
                </div>

              </div>
            </div>
        </div>

        {/* product will display here */}
        <div className="productsContainer">
          <ProductItem 
            image={'./src/assets/item1.png'}
            discount= {'-50%'}     // to remove discount tag, pass empty string ('')
            title= {'Loveseat Sofa'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
            newTag='new'  //pass 'new' word, if the product is new, else empty string ('')
          />

          <ProductItem 
            image={'./src/assets/item2.png'}
            discount= {''}
            title= {'Luxury Sofa'}
            lessPrice= {'$199.00'}
            originalPrice = {''}
          />
          <ProductItem 
            image={'./src/assets/item3.png'}
            discount= {'-50%'}
            title= {'Table Lamp'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
          />
          <ProductItem 
            image={'./src/assets/item4.png'}
            discount= {'-50%'}
            title= {'Cozy Sofa'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
          />
          <ProductItem 
            image={'./src/assets/item5.png'}
            discount= {'-50%'}
            title= {'White Drawer unit'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
          />
          <ProductItem 
            image={'./src/assets/item6.png'}
            discount= {'-50%'}
            title= {'Black Tray table'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
          />
          <ProductItem 
            image={'./src/assets/item7.png'}
            discount= {'-50%'}
            title= {'Table Lamp'}
            lessPrice= {'$199.00'}
            originalPrice = {''}
          />
          <ProductItem 
            image={'./src/assets/item8.png'}
            discount= {'-50%'}
            title= {'Black Brow Side table'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
            newTag='new'
          />
          <ProductItem 
            image={'./src/assets/item9.png'}
            discount= {'-50%'}
            title= {'Light Beige Pillow'}
            lessPrice= {'$199.00'}
            originalPrice = {''}
          />
          <ProductItem 
            image={'./src/assets/item10.png'}
            discount= {'-50%'}
            title= {'Table Lamp'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
          />
          <ProductItem 
            image={'./src/assets/item11.png'}
            discount= {'-50%'}
            title= {'Bamboo Basket'}
            lessPrice= {'$199.00'}
            originalPrice = {'$400.00'}
          />
          <ProductItem 
            image={'./src/assets/item12.png'}
            discount= {'-50%'}
            title= {'Off-white Pillow'}
            lessPrice= {'$199.00'}
            originalPrice = {''}
          />
        </div>
        <button className="seeMore">Show more</button>
        <NewsletterBanner className='max-w-7xl' />
        <Footer className='w-screen' />

    </div>
  )
}

export default ProductPage