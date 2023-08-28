// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { selectSearch } from '../store/slices/Search'
// import SearchNews from './SearchNews'

// function Search() {
//   const [searchRes, setSearchRes] = useState([])
//   const [searchCount, setSearchCount] = useState(0)
//   const API_KEY = "6948a65006374c0fa603fae0073cc60e"
//   const NEWS_API = "https://newsapi.org/v2/everything?"

//   const search = useSelector(selectSearch)
//   console.log(search);
//   useEffect(() => {
//     fetch(NEWS_API + `q=${search}&pageSize=20&page=2&apiKey=${API_KEY}`).then((resp) => {
//       return resp.json()
//     }).then((resp) => {
//       setSearchRes(resp.articles)
//       setSearchCount(resp.totalResults)
//     })
//   }, [search])
//   console.log(searchRes);
//   console.log(searchCount);

//   return (
//       <div className='mt-[50px] flex flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>
//         {
//           searchRes.map((el) => {
//             return (
//               <div key={Math.random()}>
//                 <SearchNews info={el} />
//               </div>
//             )
//           })
//         }
//       </div>
//   )
// }

// export default Search 
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSearch } from '../store/slices/Search';
import SearchNews from './SearchNews';

function Search() {
  const [searchRes, setSearchRes] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = "6948a65006374c0fa603fae0073cc60e";
  const NEWS_API = "https://newsapi.org/v2/everything?";

  const search = useSelector(selectSearch);

  useEffect(() => {
    fetch(NEWS_API + `q=${search}&pageSize=20&page=${currentPage}&apiKey=${API_KEY}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setSearchRes(resp.articles);
        setSearchCount(resp.totalResults);
      });
  }, [search, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='flex flex-col '>
      <div className='mt-[50px] flex flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>
        {searchRes.map((el) => (
          <div key={el.title}>
            <SearchNews info={el} />
          </div>
        ))}
      </div>
      <div className="gap-[20px] flex justify-center mb-[30px]">
        {currentPage > 1 && (
          <button className='p-[20px] border rounded-full bg-blue-600 text-white font-medium' onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        {currentPage * 20 < searchCount && (
          <button className='p-[20px] border rounded-full bg-blue-600 text-white font-medium' onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Search;
