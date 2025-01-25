import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import GoogleMap from './GoogleMap'

export const Contact = () => {
  return (<>
   <Breadcrumbs/> 
   <ContactInfo/>
   <ContactForm/> 
<GoogleMap/>
   </>
  )
}
