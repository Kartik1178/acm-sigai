import React from 'react'
import { Breadcrumbs } from '../BreadCrumbsMain'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import GoogleMap from './GoogleMap'

export const Contact = () => {
  return (<>
<Breadcrumbs title="Contact" activePath="/contact" />
<div className='row'>
   <ContactInfo/>
   <ContactForm/>  
   </div>
<GoogleMap/>
   </>
  )
}
