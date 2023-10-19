import React from 'react'

export default function FreeExcursion({item}) {
  return (
    <div className='excursion-description-div'>
        <h5 className='title-excursion-pf'>{item.name}</h5>
        <p className='description-excursion-pf'> {item.description}</p>
    </div>
  )
}
