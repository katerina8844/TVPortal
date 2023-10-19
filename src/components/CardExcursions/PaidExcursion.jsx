import React from 'react'

export default function PaidExcursion({item}) {
  return (
    <div className='excursion-description-div'>
    <h5 className='title-excursion-pf'>{item.name}</h5>
        <p className='description-excursion-pf'> {item.description}</p>
    <div className='all-count-div'>
        <div className='count-div'>
    {item.prices.map((e) =>
        <div className='prices-div'   key={e.min_count}>
        <img className='count-img' src={item.cost_image} alt='!#'/>
        <h6 className='all-h6'>{e.price}</h6>
        </div>
        )}
        </div>
        <div className='count-div' >
    {item.prices.map((e) => 
        <div className='prices-div'   key={e.price}>
        <img className='count-img' src={item.group_image}   alt='!#'/>
        <h6 className='all-h6'>{e.min_count}</h6>
        </div>
        )}
        </div>
    </div>
    </div>
  )
}
