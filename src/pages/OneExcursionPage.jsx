
    // const [openFree , setOpenFree] = useState(false)
    // const [openPaid , setOpenPaid] = useState(false)
    // const clickHandlerFree = () => {
    //     setOpenFree((openFree) => !openFree)
    // }
    // const clickHandlerPaid = () => {
    //     setOpenPaid((openPaid) => !openPaid)
    // }
    // const paid_excursion = item?.excursions?.paid_excursions
    // const free_excursion = item?.excursions?.free_excursions

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './stylePage/Excursion.css'
import { Container } from 'react-bootstrap';
import { FooterNavigation } from '../components/Footer_navigation/FooterNavigation';
import FreeExcursion from '../components/CardExcursions/FreeExcursion';
import PaidExcursion from '../components/CardExcursions/PaidExcursion';

export default function OneExcursionPage() {
  const excursions = useSelector((store) => store?.info)
  const { id } = useParams()
  const ex = excursions.find((e) => e.city_id == id)


  const paid_excursion = ex?.excursions?.paid_excursions
  const free_excursion = ex?.excursions?.free_excursions
  useEffect(()=> {
      window.scrollTo(0, 0)
  },[])
  return (
    <>
    <Container>
    <div>
      <div>
        <h1 className='title-excursion'>ЭКСКУРСИИ</h1>
      </div>
      <div className="excursion-card">
      <img className='img-one-excursion' src={ex?.city_image} alt='!#'/>
      <h1 className='name-one-excursion'>{ex?.city_name}</h1>
      </div>
      <div>
      <h3 className='name-fp'>
        Бесплатные экскурсии 
      </h3>
        {free_excursion?.map((el) => <FreeExcursion key={el?.id} item={el}/> )}
      </div>

      <div>
      <h3 className='name-fp'>
        Платные экскурсии 
      </h3>
        {paid_excursion?.map((el) =>  <PaidExcursion key={el?.id} item={el}/> )}
      </div>
    </div>
    </Container>
    <FooterNavigation />
    </>
  )
}
