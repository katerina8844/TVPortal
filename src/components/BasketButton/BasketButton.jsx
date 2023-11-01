import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './BasketButton.css'

export default function BasketButton({basket}) {
  return (
    <NavLink to={'/basket'}>
        <FontAwesomeIcon icon={faBasketShopping} className='btn-basket-top' />
          <div className="circle">
            <span>{basket?.length}</span>
          </div>
      </NavLink>
    )
}
