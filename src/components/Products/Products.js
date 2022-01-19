import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {productsData.map(product => <Product key={product.id} name={product.name} title={product.title} colors={product.colors} size={product.size} baseProce={product.basePrice} />)}
    </section>
  );
};

export default Products;