import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import DashboardContainer from '../Module/Dashboard/Container/DashboardContainer'
import { Header } from '../Components'
import NewsContainer from '../Module/News/Container/NewsContainer'
import NotFound from '../Module/NotFound/NotFound'
import React from 'react'

const Navigation = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<DashboardContainer />} />
          <Route exact path="/news" element={<NewsContainer />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default Navigation
