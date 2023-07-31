import React from 'react'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import Project from '../components/projects/Project'
import About from './About'
import Details from '../components/details/Details'

const HomePage = () => {
  return (
  <>
    <Banner/>
    <Services/>
    <Project/>
    <Details />
    </>
  )
}

export default HomePage