import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import PropTypes from 'prop-types';

const Products = () => {
  const [products]  = useState(productsData);
  return (  
    <section>
      {products.map(product => {
        return (
          <Product 
            key={product.id} 
            name={product.name} 
            title={product.title} 
            colors={product.colors} 
            sizes={product.sizes} 
            basePrice={product.basePrice} 
          />
        )
      })}
    </section>
  );
};

Products.protoTypes = {
productsData: PropTypes.array.isRequired
}


export default Products;