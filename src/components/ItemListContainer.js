/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { data } from './data/data';
import ItemList from './ItemList'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min'


const ItemListContainer =( { greeting } ) =>{
  const [items, setProductos] = useState([]);
  const [isLoading, setisLoading] = useState (true);
  const { idcategoria } = useParams ();

  useEffect (() => {
    setisLoading(true);
    const getItems = new Promise ((resolve) => {
       setTimeout(() => {
        const myData = idcategoria ? data.filter(item => item.id === '1')
      : data;

       resolve(myData);
       }, 1000);
      });

     getItems.then((res) => {
       setProductos (res);
    })
    .finally(() => setisLoading(false))
    }, [idcategoria]);

    return isLoading ? (
      <h1>Cargando....</h1>
    ) : (

    <Card>
      <Card.Text>{greeting}</Card.Text>
      <ItemList items={items} />
    </Card>
  );
    };

export default ItemListContainer;

