import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import CartContext from "./CartContext";
import { data } from "./data/data";


const ItemDetail = () => {
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <Card>
      {products &&
        data.map((product, id) => (
          <Card.Body key={id}>
            <Card.Img src={product.imagen} alt={product.nombre} />
            <Card>
              <Card.Text>
                {product.nombre} - ${product.precio}
              </Card.Text>
            </Card>
            {!product.inCart ? (
              <Button onClick={() => addItemToCart(product)}>
                agregar al carrito
              </Button>
            ) : (
              <Button>En el carrito</Button>
            )}
          </Card.Body>
        ))}
    </Card>
  );
};

export default ItemDetail;

