import './NewsComponent.scss'

import { CButton, CGap, CInput, Card } from '../../../Components'
import React, { useEffect, useState } from 'react'

import { fetchApi } from '../../../App/Helper'

const NewsComponent = () => {
  const [news, setNews] = useState([])
  const [searchFilterNews, setSearchFilterNews] = useState('')

  const fetchNews = async () => {
    const data = await fetchApi(process.env.REACT_APP_API_URL)
    setNews(data.articles)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const filterNews = (arr) => {
    const newArr = arr?.filter((val) => {
      if (searchFilterNews === '') {
        return val
      } else if (
        val.title?.toLowerCase().includes(searchFilterNews.toLowerCase())
      ) {
        return val
      }
      return null
    })
    return newArr
  }

  return (
    <>
      <div className="newsWrapper">
        <div className="title">News</div>
        <CGap height={20} />
        <CInput
          placeholder="Search by News Title"
          onChange={(e) => setSearchFilterNews(e.target.value)}
        />
        <CGap height={20} />
        <CButton title="Search by" onClick={fetchNews} />
        <CGap height={20} />
        <div className="contentWrapper">
          {!news ? (
            <p>fetchingData...</p>
          ) : (
            <>
              {filterNews(news).map((val, index) => {
                const { author, title, description, urlToImage, publishedAt } =
                  val
                return (
                  <Card
                    key={index}
                    author={author}
                    title={title}
                    urlToImage={urlToImage}
                    description={description}
                    publishedAt={publishedAt}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default NewsComponent
