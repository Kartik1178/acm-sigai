import React from 'react'
import { Breadcrumbs } from '../BreadCrumbsMain'
import AboutMeSidebar from './Aboutme'
import ProjectBody from './ProjectBody'

const ProjectDetails = () => {
  return (
    <>
     <Breadcrumbs title="Project Details" activePath="/project-details" />
    <ProjectBody/>
    <AboutMeSidebar/>
    </>
  )
}

export default ProjectDetails 