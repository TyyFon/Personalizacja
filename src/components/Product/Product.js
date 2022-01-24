import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage';
import { useState } from 'react'


const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [currentSize, setCurrentSize] = useState(sizes[0])
  
  
   
 
  const colorClass = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  }
  
  const getPrice = () => {
    return (
        basePrice + currentSize.additionalPrice
      );
    };
   
    
  return (
    <article className={styles.product}>
      <ProductImage title = {title} currentColor = {currentColor} name = {name}/>
      <div>
        
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((sizes) => (
                <li key={sizes.name}>
                  <button
                    type='button'
                    className={clsx(sizes.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(sizes)}
                  >
                    {sizes.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button
                    type='button'
                    className={clsx(colorClass(color), color === currentColor && styles.active)}
                    onClick={() => setCurrentColor(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;