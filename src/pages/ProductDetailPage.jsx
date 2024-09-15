import React from 'react'
import SalesBanner from '../components/SalesBanner'
import Header from '../components/Header'
import SectionSpan from '../components/SectionSpan'
import NewsletterBanner from '../components/NewsletterBanner'
import Footer from '../components/Footer'
import ProductsCarousel from '../components/ProductsCarousel'
import SimilarTitle from '../components/SimilarTitle'
import './ProductDetailPage.css'


function ProductDetailPage() {
  return (
    <div className='flex w-full flex-col items-center productPageBox'>
        <SalesBanner />
        <Header />
        <div className="productdetailBox">
            <div className="location">Home {'>'}&nbsp;&nbsp; Shop {'>'}&nbsp;&nbsp; Living room {'>'} <span className='lastLoc'>Product</span></div>
            <div className="productContainer">
                <div className="imagesBox">
                    <img src="./src/assets/item1.png" alt="product images" />
                    <img src="./src/assets/tablep1.png" alt="product images" />
                    <img src="./src/assets/tablep2.png" alt="product images" />
                    <img src="./src/assets/tablep3.png" alt="product images" />
                    <img src="./src/assets/tablep4.png" alt="product images" />
                    <img src="./src/assets/tablep5.png" alt="product images" />
                </div>

                <div className="itemDetailsBox">
                    <div className="ratingBox2">
                        <div className="rate">
                            <img src="./src/assets/star.svg" alt=""  />
                            <img src="./src/assets/star.svg" alt=""  />
                            <img src="./src/assets/star.svg" alt=""  />
                            <img src="./src/assets/star.svg" alt=""  />
                            <img src="./src/assets/star.svg" alt=""  />
                        </div>
                        <p className="userRating">11 Reviews</p>
                    </div>
                    <p className="productTitle2">Tray Table</p>
                    <p className="prodDes">Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.</p>
                    <div className="priceBox">
                        <p className="lowPrice">$200.00</p>
                        <p className="orgPrice">$400.00</p>
                    </div>
                    <hr className='hr' />
                    <div className="dimension">
                        <p>Measurements</p>
                        <p className='size'>17 1/2x20 5/8 "</p>
                    </div>
                    <div className="chooseColor">
                        <p>Choose Color &nbsp;{'>'}</p>
                        <p className="colorName">Black</p>
                        <div className="moreItems">
                            <img src="./src/assets/tableblack.png" alt="" />
                            <img src="./src/assets/tableorange.png" alt="" />
                            <img src="./src/assets/tablered.png" alt="" />
                        </div>
                    </div>
                    <div className="operationBox">
                        <div>
                            <div className="countBox">
                                <button>-</button>
                                <p className="num">2</p>
                                <button>+</button>
                            </div>
                            <button className='wishlistBtn'><img src="./src/assets/wishlist.svg" alt="" />Wishlist</button>
                        </div>

                        <button className="addCart">Add to Cart</button>
                    </div>

                    <div className="descripBox">
                        <div className="model">
                            <p className="title">SKU</p>
                            <p className="value">1117</p>
                            <p className="CATEGORY">CATEGORY</p>
                            <p className="value">Living Room, Bedroom</p>
                        </div>
                    </div>


                    <div className="additionInfoBox">
                        <SectionSpan  title='Addition Info' />
                        <p className="addInfo">
                            <p className="infoTitle">Details</p>
                            You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.

                            <p className="infoTitle">Packaging</p>
                            Width: 20 " Height: 1 ½ " Length: 21 ½ " <br />
                            Weight: 7 lb 8 oz <br />
                            Package(s): 1
                        </p>
                    </div>

                    <div className="additionInfoBox">
                        <SectionSpan  title='Questions' />
                    </div>

                    <div className="additionInfoBox">
                        <SectionSpan  title='Reviews (11)' />
                    </div>
                </div>
            </div>

            <SimilarTitle title={'You might also like'} />
            <ProductsCarousel />
        </div>
            <NewsletterBanner />
            <Footer />

        
    </div>
        
  )
}

export default ProductDetailPage