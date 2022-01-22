import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

const Products = () => {
  const [products]  = useState(productsData);
    
  return (
    <section>
      {productsData.map(product => <Product key={product.id} name={product.name} title={product.title} colors={product.colors} sizes={product.sizes} basePrice={product.basePrice} />)}
    </section>
  );
  /*
return (
    <section>
      {products.map((product, index) => {
        return <Product {...products[index]} key={product.id} />;
      })}
    </section>
  );
*/
 };


Products.protoTypes = {
productsData: PropTypes.array.isRequired

}


export default Products;