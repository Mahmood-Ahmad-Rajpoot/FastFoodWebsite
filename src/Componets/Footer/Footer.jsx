import React from 'react'
import ContactDetails from './FooterComponents/ContactDetails'
import SocialMediaLinks from './FooterComponents/SocialMediaLinks'
import Timings from './FooterComponents/Timings'
import RightsReserved from './FooterComponents/RightsReserved'

const Footer = () => {
  return (
    <div className='w-full md:h-[100vh] h-auto bg-[--bg-color] pt-[100px]'>
      <div className='sm:px-[100px] px-[20px] flex justify-center  flex-wrap gap-[80px]'>
        <ContactDetails/>
        <SocialMediaLinks/>
        <Timings/>

      </div>
      <RightsReserved/>
     </div>
  )
}

export default Footer