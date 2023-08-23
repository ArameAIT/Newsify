import React from 'react'
import { useSelector } from 'react-redux'
import { selectSaves } from '../store/slices/Saves'
import SavesNews from './SavesNews';

function Saved() {
  const saves = useSelector(selectSaves)
  console.log(saves);
  return (
    <div className='mt-[50px] flex justify-center items-center flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>
      {
        saves.map((element) => {
          return (
            <div key={Math.random()}>

              <SavesNews info={element} />
            </div>
          )

        })
      }
    </div>
  )
}

export default Saved