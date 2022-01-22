import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
//import Products from '../Products/Products';
import { useState } from 'react'


const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0])
  const [currentSize, setCurrentSize] = useState(sizes[0])

   //console.log('currentSize:', currentSize)
   //console.log('sizes.name:' , currentSize.size)
  

  const colorClass = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  }
   
    
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt= {title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
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
                    onClick={() => setCurrentSize(sizes.name)}
                  >
                    {sizes.name}
                  </button>
                </li>
              ))}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
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