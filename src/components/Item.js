import  React, { useContext }  from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data/data';
import CartContext from './CartContext';






export const Item = () =>{
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className="productsContainer">
      {products &&
        data.map((product, i) => (
          <div key={i} className="product">
            <img src={product.img} alt={product.nombre} />
            <div>
              <p>
                {product.nombre} - ${product.precio}
              </p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};