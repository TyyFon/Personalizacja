import OptionSize from '../OptionSize/OptionSize'
import OptionColor from '../OptionColor/OptionColor'
import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';




const ProductForm = ({
  sizes, 
  colors, 
  setCurrentColor,
  setCurrentSize,
  currentColor,
  currentSize
}) => {
  return (
    <form>
      <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} currentSize={currentSize}/>
      <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}/>
			<Button className={styles.button}>
			  <span className="fa fa-shopping-cart"/>
			</Button>
		</form>
  )
};

export default ProductForm