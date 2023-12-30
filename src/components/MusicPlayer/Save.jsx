import React from 'react'
import { HiBookmark } from 'react-icons/hi';

function Save({saveSong , saved}) {


  return (
    <div>
      <HiBookmark onClick={saveSong} color={saved ? 'cyan' : 'white'} className="hidden sm:block cursor-pointer w-6 h-6 mr-2"/>
    </div>
  )
}

export default Save
