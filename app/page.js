import React from 'react'
import HomePageGridCarousel from './components/HomePageGridCarousel'
import WelcomeSection from './components/WelcomeSection'

function page() {
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