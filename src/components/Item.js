import  React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';







export const Item = ({product}) =>{

  return (
    <Link to={`/item/${product.id}`}>
    <Card>
          <Card.Body>
            <Card.Img src={product.imagen} alt={product.nombre} />
            <Card>
              <Card.Text>
                {product.nombre}
              </Card.Text>
            </Card>
          </Card.Body>
    </Card>
    </Link>
  );
};