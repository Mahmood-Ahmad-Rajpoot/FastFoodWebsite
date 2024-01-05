import React from 'react'
 import BookForm from './TableForm/BookingForm'
import BookFormHeading from './BookFormHeading'

const Booktable = () => {
  return (
    <div className='w-full pt-[150px] sm:px-[100px] px-[20px] py-[20px]'>
        <BookFormHeading/>
        <BookForm/>
        
    </div>
  )
}

export default Booktable