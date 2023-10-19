import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addBasketThunk } from '../../redux/actions/basketAction'

export default function BasketCard({item}) {
    // const room = useSelector((store) => store?.user?.data?.room)
    // const dispatch = useDispatch()
    // const product = item?.product_id
    const [count, setCount] = useState(Number(item?.count))
    const [open, setOpen] = useState(true)

    const firstPrice = item?.price / item?.count
    const totalPrice = firstPrice * count
    const increment = () => {
            setCount(count + 1)
            setOpen(false)
            // dispatch(addBasketThunk(dataIncrement))
      }
    
      const decrement = () => {
        if(count > 0){
          setCount(count - 1)
          setOpen(false)
          // dispatch(addBasketThunk(dataDecrement))
        }
      }

    //   const dataDecrement = {
    //     info: {
    //       action: "add_to_basket",
    //       room: room,
    //       category: 'bar',
    //       product_id: product,
    //       count: -1
    //     }
    // }

    //   const dataIncrement = {
    //     info: {
    //       action: "add_to_basket",
    //       room: room,
    //       category: 'bar',
    //       product_id: product,
    //       count: 1
    //     }
    // }
  return (
  <div className="card-body-basket" >
    <div>
    <h5 className="card-title-basket">{item.product_name}</h5>
    <div style={{display: 'flex' , alignItems: 'center' ,justifyContent:'space-between', width: '150px'}}>
      <button className="btn-basket" onClick={decrement} style={{paddingLeft : '10px' , paddingRight: '10px', paddingBottom: '5px'}}> - </button>
              <h3 style={{margin: '0px'}}>{open ? item?.count : count}</h3>
      <button className="btn-basket" onClick={increment} style={{paddingLeft : '10px' , paddingRight: '10px'}} > + </button>          
    </div>
    </div>
    <div style={{marginLeft: '20px'}}>
        <p style={{margin: '0px'}}>{totalPrice}руб.</p>
    </div>
  </div>
 )
}
