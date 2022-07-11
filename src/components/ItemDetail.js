import{ React, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Itemcount from './ItemCount'


function ItemDetail ({props}) {
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const onAdd = (sumar) => {
        setPurchaseCompleted(true);
    }


return (
<>

<Card>
    <Card.Body>
    <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <Card.Text>{props.stock}</Card.Text>
        <Card.Text>{props.descuento}</Card.Text>

        <Card>{purchaseCompleted ? (
            <Link to="/cart"/>
        ) : (
            <Itemcount onAdd={onAdd}/>
        )
        

        }

        </Card>
    </Card.Body>
</Card>


</>


    );
}

export default ItemDetail;