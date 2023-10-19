import React from 'react'

export default function Orders( {item} ) {
    const info = JSON.parse(item?.structure)
  return (
    <div className='modal-info'>
        {info.map((el) => <div style={{fontWeight: '600' }} key={el?.product_id}>  {el?.product} <br /> 
        <p style={{fontWeight:'200' , fontSize:'15px' , margin: '0px'}}>
        Колличество: {el?.count}
        </p>
        </div>)}
        <p style={{fontWeight:'400' , fontSize:'15px' , margin: '0px'}}>
        Время заказа : {item?.time}{' '}{item?.date}
        </p>
        <p style={{fontWeight:'400' , fontSize:'15px' , margin: '0px'}}>Стоимость : {item?.sum}</p>
    </div>
  )
}
