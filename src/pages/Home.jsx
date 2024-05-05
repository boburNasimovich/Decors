import React from 'react'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import Advantages from '../components/Advantages'
import Usluge from '../components/Usluge'
import Zakaz from '../components/Zakaz'
import PerviShag from '../components/PerviShag'
import Carusel from '../components/Carusel'
import ObsudidZakaz from '../components/ObsudidZakaz'
import Novosti from '../components/Novosti'

const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 /> 
      <Advantages />
      <Usluge />  
      <Zakaz />
      <PerviShag />
      <Carusel />
      <ObsudidZakaz />
      <Novosti />
    </>
  )
}

export default Home