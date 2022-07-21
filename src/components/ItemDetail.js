import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import CartContext from "./CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = ({product}) => {
  const { addItemToCart } = useContext(CartContext);
console.log(product);
  return (
    <Card>
          <Card.Body>
            <Card.Img src={product.imagen} alt={product.nombre} />
            <Card>
              <Card.Text>
                {product.nombre} - ${product.precio}
              </Card.Text>
            </Card>
            {/* {!product.inCart ? (
              <Button onClick={() => addItemToCart(product)}>
                agregar al carrito
              </Button>
            ) : (
              <Button>En el carrito</Button>
            )} */}
            <ItemCount/>
          </Card.Body>
    </Card>
  );
};

export default ItemDetail;

