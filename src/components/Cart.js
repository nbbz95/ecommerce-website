import { useContext, useEffect, useState } from "react";
import CartContext from "../components/CartContext";
import styles from "./Cart.css";
import CartWidget from "./CartWidget";
import ItemDetail from "./ItemDetail";

const Cart = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);


  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <div
        onClick={() => setCartOpen(!cartOpen)}
        className={styles.buttonCartContainer}
      >
        <div className={styles.buttonCart}>
          {!cartOpen ? (
            <CartWidget />
          ) : (
            <CartWidget/>
          )}
        </div>
        {!cartOpen && (
          <div className={styles.productsNumber}>{productsLength}</div>
        )}
      </div>

      {cartItems && cartOpen && (
        <div className={styles.cart}>
          <h2>Tu carrito</h2>

          {cartItems.length === 0 ? (
            <p className={styles.cartVacio}>Tu carrito esta vacio</p>
          ) : (
            <div className={styles.productsContainer}>
              {cartItems.map((item, i) => (
                <ItemDetail key={i} item={item} />
              ))}
            </div>
          )}

          <h2 className={styles.total}>Total: ${total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;