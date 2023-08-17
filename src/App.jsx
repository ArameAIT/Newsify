import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleNews, selectNews } from './store/slices/News'
import Categories from './Components/Categories'
import { selectCat } from './store/slices/Categories'
import { selectCountry } from './store/slices/Country'
import News from './Components/News'

function App() {
  const dispatch = useDispatch()

  const API_KEY = "6948a65006374c0fa603fae0073cc60e"
  const NEWS_API = "https://newsapi.org/v2/top-headlines?"

  const cat = useSelector(selectCat)
  const country = useSelector(selectCountry)
  console.log(country);

  useEffect(() => {
    fetch(NEWS_API + `country=${country}&category=${cat}&apiKey=${API_KEY}`).then((resp) => {
      return resp.json()
    }).then((resp) => {
      dispatch(handleNews({
        resp: resp.articles
      }))
    })
  }, [cat, country])

  const news = useSelector(selectNews)
  console.log(news);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <Categories />
      </div>
      <div className='mt-[50px] flex flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>
        {
          news.map((el) => {
            return (
              <div key={Math.random()}>
                <News info={el} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
