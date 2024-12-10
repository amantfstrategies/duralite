import React from 'react'
import HomePageCarousel from '../components/HomePageCarousel'
import Products from '../components/Products'
import WelcomeSection from '../components/WelcomeSection'
import HomePageGridCarousel from '../components/HomePageGridCarousel'

const page = () => {
  return (
    <div>
      <HomePageGridCarousel/>
        {/* <HomePageCarousel/> */}
        <WelcomeSection/>
        {/* <Products/> */}
    </div>
  )
}

export default page