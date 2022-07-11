import  React  from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';





export const Item = ( { nombre, imagen, precio, id, descripcion}) =>{
  return (
    <Link to={`/item/${id}`}>
  <Row xs={1} md={2} className="g-4">
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img src={require(`/public/aseets/img-productos/${imagen}`)} alt={nombre}/>
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
            <Card.Text>${precio}</Card.Text>
            <Button variant="dark">{descripcion}</Button>
            <ItemCount />
        </Card.Body>
      </Card>
      </Col>
  </Row>
  </Link>

  )
}