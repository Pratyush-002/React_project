import React, { useState } from 'react'
import ItemList from './ItemList';

const ResturantCategory = ({data, showItems, setShowIndex}) => {

    const dropDown = () =>{
        setShowIndex();
    }
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
            <div className='flex justify-between ' onClick={dropDown}>
            <span className='font-bold text-base '>{data.title} ({data.itemCards.length})</span>
            <span>🔻</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
        
    </div>
  )
}

export default ResturantCategory;