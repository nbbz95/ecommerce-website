/* eslint-disable react-hooks/exhaustive-deps */
import{useEffect, useState, React} from 'react';
import ItemDetail from './ItemDetail';
import "./ItemDetailContainer.css";
import { data } from './data/data'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setisLoading] = useState (true);
    const { idItem } = useParams();

        useEffect (() => {
            setisLoading (true);
            const getItems = new Promise ((resolve) => {
                setTimeout(() => {

                    const myData = data.find((item) => item.id === idItem);

                    resolve (myData);
            }, 1000);
                });
                getItems.then((res) => {
                    setProduct(res); })
                    setisLoading(false);
                }, []);

                return isLoading ? <h1>Cargando...</h1> :
                <ItemDetail {...product} />;
};

export default ItemDetailContainer;













