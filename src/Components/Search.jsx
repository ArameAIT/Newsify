import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSearch } from '../store/slices/Search'
import SearchNews from './SearchNews'

function Search() {
  const [searchRes, setSearchRes] = useState([])
  const API_KEY = "6948a65006374c0fa603fae0073cc60e"
  const NEWS_API = "https://newsapi.org/v2/everything?"

  const search = useSelector(selectSearch)

  useEffect(() => {
    fetch(NEWS_API + `q=${search}&apiKey=${API_KEY}`).then((resp) => {
      return resp.json()
    }).then((resp) => {
      setSearchRes(resp.articles)
    })
  }, [search])
  return (
      <div className='mt-[50px] flex flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>
        {
          searchRes.map((el) => {
            return (
              <div key={Math.random()}>
                <SearchNews info={el} />
              </div>
            )
          })
        }
      </div>
  )
}

export default Search 