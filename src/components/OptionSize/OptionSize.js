import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptiontSize = ({sizes , currentSize , setCurrentSize}) => {
    return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((size) => {
          return(
          <li key={size.name}>
            <button
              type='button'
              className={clsx(size.name === currentSize.name && styles.active)}
              onClick={() => setCurrentSize(size)}
            >
            {size.name}
            </button>
          </li>
          )
          })}
        </ul>
    </div>
)
};

export default OptiontSize