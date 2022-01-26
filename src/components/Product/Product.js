import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage'
import { useState } from 'react'
import { useMemo } from 'react'
import ProductForm from '../ProductForm/ProductForm'



const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [currentSize, setCurrentSize] = useState(sizes[0])
  
  const getPrice = useMemo(() => {
    return (
        currentSize.additionalPrice + basePrice
      );
    }, [currentSize]);
      
  return (
    <article className={styles.product}>
      <ProductImage
        title = {title}
        currentColor = {currentColor}
        name = {name}
      />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm 
        sizes={sizes}
        colors={colors} 
        setCurrentColor={setCurrentColor} 
        setCurrentSize={setCurrentSize} 
        currentSize={currentSize} 
        currentColor={currentColor}
        />
      </div>
    </article>
  )
};

export default Product;