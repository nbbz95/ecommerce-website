import React from 'react'
import { Item } from './Item';


export const ItemList = ({ items }) => {
  return (
      <section className='grid'> {items?.map((item) => (
         <Item  product={item}  key={item.id} />
       ))}
     </section>
  );
}

export default ItemList;
