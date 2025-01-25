import React from 'react'

import TeamSection from './TeamSection'
import { Breadcrumbs } from '../BreadCrumbsMain'
export const TeamMain = () => {
  return (
  <>
 <Breadcrumbs title="Teams" activePath="/team" />
  <TeamSection/>
  
  </>
  )
}
