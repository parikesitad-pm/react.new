import './DashboardComponent.scss'

import { CLink } from '../../../Components'
import React from 'react'

const DashboardComponent = () => {
  return (
    <>
      <div className="dashboardWrapper">
        <h1 className="title">React News App</h1>
        <div className="searchBox">
          <CLink title="Go to app >>" to="/news" />
        </div>
      </div>
    </>
  )
}

export default DashboardComponent
