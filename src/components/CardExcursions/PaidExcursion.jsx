import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketThunk } from '../../redux/actions/basketAction'

export default function PaidExcursion({item}) {
  const room = useSelector((store) => store?.user?.data?.room)
  const dispatch = useDispatch()
  const product = item?.id
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }
  const data = {
      info: {
        action: "add_to_basket",
        room: room,
        category: 'bar',
        product_id: product,
        count: ''
      }
  }

  const addBasket = () => {
    dispatch(addBasketThunk(data))
  }



  return (
    <div className='excursion-description-div'>
      <h5 className='title-excursion-pf'>{item.name}</h5>
      <p className='description-excursion-pf'> {item.description}</p>
      {item?.prices?.map((e) => 
          <>
          <div className='count-div' key={e?.min_count}>
            <div className='prices-div'   >
              <img className='count-img' src={item.cost_image} alt='!#'/>
              <h6 className='all-h6'>{e.price}</h6>
            </div>
            <div className='prices-div' >
              <img className='count-img' src={item.group_image}   alt='!#'/>
              <h6 className='all-h6'>{e.min_count}</h6>
            </div>
            <div className='card-body-count-excursion'>
              <button className="btn-count-excursion" onClick={decrement} style={{paddingLeft : '10px' , paddingRight: '10px', paddingBottom: '5px'}}> - </button>
              <h3 style={{margin: '0px', fontSize:'17px'}}>{count}</h3>
              <button className="btn-count-excursion" onClick={increment} style={{paddingLeft : '10px' , paddingRight: '10px'}}> + </button>     
              <button className="btn-primary-excursion" onClick={addBasket}>
                  В корзину
              </button>
            </div>
          </div>
          <hr />
          </>
          )}
    </div>
  )
}
