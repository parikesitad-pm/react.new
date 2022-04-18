import './NewsComponent.scss'

import { CButton, CGap, CInput, Card } from '../../../Components'
import React, { useEffect, useState } from 'react'

import LazyLoad from 'react-lazyload'
import { fetchApi } from '../../../App/Helper'

const NewsComponent = () => {
  const [news, setNews] = useState([])
  const [searchFilterNews, setSearchFilterNews] = useState('')

  const fetchNews = async () => {
    const data = await fetchApi(process.env.REACT_APP_API_URL)
    setNews(data.articles)
    console.log(data.articles)
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const filterNews = (arr) => {
    const newArr = arr?.filter((val) => {
      if (searchFilterNews === '') {
        return val
      } else if (
        val.author.toLowerCase().includes(searchFilterNews.toLowerCase())
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
        <LazyLoad height={200} offset={100}>
          <CGap height={20} />
          <CInput
            placeholder="Search author"
            onChange={(e) => setSearchFilterNews(e.target.value)}
          />
          <CGap height={20} />
          <CButton title="Search" onClick={fetchNews} />
          <CGap height={20} />
          <div className="contentWrapper">
            {!news ? (
              <p>fetchingData...</p>
            ) : (
              <>
                {filterNews(news).map((val, index) => {
                  const {
                    author,
                    title,
                    description,
                    urlToImage,
                    publishedAt,
                  } = val
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
        </LazyLoad>
      </div>
    </>
  )
}

export default NewsComponent
