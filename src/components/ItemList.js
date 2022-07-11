import React from 'react'
import { Item } from './Item';


export const ItemList = ({ items }) => {
  return (
      <section className='itemList'> {items?.map((item) => (
         <Item {...item} key={item.id} />
       ))}
     </section>
  );
}

export default ItemList;
