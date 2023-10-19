import React, { useEffect, useState } from 'react'
import { FooterNavigation } from '../components/Footer_navigation/FooterNavigation'
import { Container } from 'react-bootstrap'
import './stylePage/Restaurant.css'
import OneCard from '../components/Menu_card/OneCard'
import { useDispatch, useSelector } from 'react-redux'
import { getBarThunk } from '../redux/actions/infoAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { getBasketThunk } from '../redux/actions/basketAction'

export default function RestaurantPage() {
  const allBar = useSelector((store) => store.info)
  const basket = useSelector((store) => store?.basket)
  const room = useSelector((store) => store?.user?.data?.room)

  const [openRest, setOpenRest] = useState(false)
  const [openBar, setBarRest] = useState(false)
  const [openVine, setVineRest] = useState(false)
  const [openTea, setTeaRest] = useState(false)
  const [open , setOpen] = useState(false)
  const [filter, setFilter] = useState()
  const dispatch = useDispatch()
  const menu = allBar?.cards
  const category = allBar?.categories
  
  const restCard= menu?.rest_card
  const barCard= menu?.bar_card
  const vineCard= menu?.vine_card
  const teaCard= menu?.tea_card
  const allCard = restCard?.concat(barCard)?.concat(vineCard)?.concat(teaCard)
  
  const restCategory = category?.rest_card_categories
  const barCategory = category?.bar_card_categories
  const vineCategory = category?.vine_card_categories
  const teaCategory = category?.tea_card_categories
  
  const data = {
    info: {
        action: 'menu_bar' ,
    },
  };
  const getBasket = {
    info: {
      action: 'get_basket_contents',
      room: room
    }
  }
  
  useEffect(()=> {
    dispatch(getBarThunk(data))
    dispatch(getBasketThunk(getBasket))
    window.scrollTo(0, 0)
  },[basket?.length]);

  const clickRestCard = () => {
    setOpenRest((openRest) => !openRest)
    setBarRest(false)
    setTeaRest(false)
    setVineRest(false)
  }
  const clickBarCard = () => {
    setBarRest((openBar) => !openBar)
    setTeaRest(false)
    setVineRest(false)
    setOpenRest(false)
  }
  const clickVineCard = () => {
    setVineRest((openVine) => !openVine)
    setBarRest(false)
    setOpenRest(false)
    setTeaRest(false)
  }
  const clickTeaCard = () => {
    setTeaRest((openTea) => !openTea)
    setBarRest(false)
    setVineRest(false)
    setOpenRest(false)
  }
  const handleClick = (e) => {
    const result = allCard?.filter((i) => i.category === e.name);
    setFilter(result)
    setOpen(true)
}



    return (
    <>
    <Container>
    <div>
      <h1 className='menu-name'>РЕСТОРАН</h1> 
    </div>
      <NavLink to={'/buscket'}>
        <FontAwesomeIcon icon={faBasketShopping} className='rest-basket' />
        <div className="rest-circle">
          <span>{basket?.length}</span>
        </div>
      </NavLink>
    <div className='category-type'>
    <div className="dropdown" >
    <h4 onClick={clickRestCard} className='type-name'>Меню Ресторана</h4>
    {openRest ? ( <div onClick={clickRestCard} className="dropdown-content">
        {restCategory.map((e) =><p onClick={()=>handleClick(e)} className='p-category-menu' key={e.id}>{e.name}</p>)}
      </div>) : ''}
    </div>
      <div className="dropdown">
    <h4 onClick={clickBarCard} className='type-name'>Барная карта</h4>
    {openBar ? ( <div  onClick={clickBarCard} className="dropdown-content">
        {barCategory.map((e) =><p onClick={()=>handleClick(e)} className='p-category-menu' key={e.id}>{e.name}</p>)}
      </div>) : ''}
    </div>
    <div className="dropdown">
    <h4 onClick={clickVineCard} className='type-name'>Винная карта</h4>
    {openVine ? ( <div  onClick={clickVineCard} className="dropdown-content">
        {vineCategory.map((e) =><p onClick={()=>handleClick(e)} className='p-category-menu' key={e.id}>{e.name}</p>)}
      </div>) : ''}
    </div>
    <div className="dropdown">
    <h4 onClick={clickTeaCard} className='type-name'>Чайная карта</h4>
    {openTea ? ( <div  onClick={clickTeaCard} className="dropdown-content" style={{right: '-3px'}}>
        {teaCategory.map((e) =><p onClick={()=>handleClick(e)} className='p-category-menu' key={e.id}>{e.name}</p>)}
      </div>) : ''}
    </div>
    </div>
    <div className='div-card-rest'>
        <p className='p-card-rest'>{!open ? 'ВСЕ МЕНЮ' : filter?.length === 0 ? 'ТОВАРЫ ОТСУТСТВУЮТ' : filter[0]?.category }</p>
      </div>
      {!open ? (
        <div className='menu-container'>
          {allCard?.map((el) =>
            <OneCard el={el} key={el.id}/>
          )}
      </div>
      ) : (
        <div className='menu-container'>
          {filter?.map((el) =>
            <OneCard  el={el} key={el.id}/>
          )}
      </div>
      )}

    </Container>
    <FooterNavigation />
    </>
  )
}
