import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Sobre from '../Components/Sobre'
import Servicos from '../Components/Servicos'
import Contato from '../Components/Contato'

const Home = () => {
  return (
    <div className=''>
        <Header />
        <Banner />
        <Sobre />
        <Servicos />
        <Contato />
    </div>
  )
}

export default Home