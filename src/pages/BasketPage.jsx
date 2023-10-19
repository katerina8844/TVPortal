import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { FooterNavigation } from '../components/Footer_navigation/FooterNavigation'
import './stylePage/Buscket.css'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../redux/actions/basketAction'
import BasketCard from '../components/Menu_card/BasketCard'



export default function BuscketPage() {
    const user = useSelector((store) => store?.user)
    const basket = useSelector((store) => store?.basket)
    const dispatch = useDispatch()
    const room = user?.data?.room

    const barBasket = basket.filter((el) => el.category === 'bar')
    const servicesBasket = basket.filter((el) => el.category === 'services')


    const data = {
        info : {
            action: 'get_basket_contents',
            room: room
        }
    }

    useEffect(() => {
        dispatch(getBasketThunk(data))
        window.scrollTo(0, 0)
    }, [])



  return (
    <>
    <Container>
    <div>
      <h1 className='buscket-name'>КОРЗИНА</h1> 
    </div>
    <h1 className='basket-title'>Заказы Ресторана</h1>
    {barBasket?.map((el) =>  <BasketCard key={el?.id}  item={el} />)}
    <h1 className='basket-title'>Другие заказы</h1>
    {servicesBasket?.map((el) =>  <BasketCard key={el?.id}  item={el} />)}

    </Container>
    <FooterNavigation />
    </>
  )
}
