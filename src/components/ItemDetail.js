import React, { useContext } from "react";
import CartContext from "./CartContext";
import { data } from "./data/data";


const ItemDetail = () => {
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div>
      {products &&
        data.map((product, id) => (
          <div key={id}>
            <img src={product.imagen} alt={product.nombre} />
            <div>
              <p>
                {product.nombre} - ${product.precio}
              </p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                agregar al carrito
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default ItemDetail;