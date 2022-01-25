import styles from '../Product/Product.module.scss';
import clsx from 'clsx';

const OptiontSize = (sizes , currentSize , setCurrentSize) => {
    //console.log(sizes)
   
return (

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
)
}

export default OptiontSize