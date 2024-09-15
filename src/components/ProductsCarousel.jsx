import React from 'react'
import ProductItem from './ProductItem'

import './ProductsCarousel.css'

function ProductsCarousel({className=''}) {
  return (
    <div className={"similarProductSuggestionBox " + className}>
                <ProductItem 
                    image= '../src/assets/item1.png'
                    discount= '-50%'
                    title= 'Loveseat Sofa'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag='new'
                />


                <ProductItem 
                    image= '../src/assets/item2.png'
                    discount= ''
                    title= 'Luxury Sofa'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item3.png'
                    discount= ''
                    title= 'Table Lamp'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item4.png'
                    discount= ''
                    title= 'Cozy Sofa'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item5.png'
                    discount= ''
                    title= 'White Drawer unit'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item6.png'
                    discount= ''
                    title= 'Black Tray table'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item7.png'
                    discount= ''
                    title= 'Table Lamp'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item8.png'
                    discount= ''
                    title= 'Black Brow Side table'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />


                <ProductItem 
                    image= '../src/assets/item9.png'
                    discount= ''
                    title= 'Light Beige Pillow'
                    lessPrice= '$200'
                    originalPrice= '$400'
                    newTag=''
                />
            </div>
  )
}

export default ProductsCarousel