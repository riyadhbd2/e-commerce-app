import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>
      {/* Finter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="" id="" value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="" id="" value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" name="" id="" value={'Kids'} />Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
      </div>
        
    </div>
  )
}

export default Collection