import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketThunk } from '../../redux/actions/basketAction'

export default function ServiceCard({item}) {
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
        category: 'services',
        product_id: product,
        count: count
      }
  }

  const addBasket = () => {
    dispatch(addBasketThunk(data))
  }
  return (
    <>
    <div className="service-one-card">
    <img src={item?.src} className='img-card-service' alt='!#'/>
    <div>
  <div className="card-body-service" >
    <div>
    <h5 className="card-title-service">{item?.title}</h5>
    <p style={{fontSize: '10px' ,margin: '0px'}}>{item?.price}руб.</p>
    </div>
    <div className='card-body-count'>
      <button className="btn-count" onClick={decrement} style={{paddingLeft : '10px' , paddingRight: '10px', paddingBottom: '5px'}}> - </button>
              <h3 style={{margin: '0px', fontSize:'17px'}}>{count}</h3>
      <button className="btn-count" onClick={increment} style={{paddingLeft : '10px' , paddingRight: '10px'}} > + </button>          
      <button className="btn-service" onClick={addBasket}>
        В корзину
      </button>
    </div>
  </div>
</div>  
</div>
    </>
  )
}
