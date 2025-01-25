import React from 'react'
import { Breadcrumbs } from '../BreadCrumbsMain'

import Gallery from './Gallery'

export const GalleryMain = () => {
  return (<>
  <Breadcrumbs title="Gallery" activePath="/gallery" />

  
    <Gallery/>
    </>
  )
}
